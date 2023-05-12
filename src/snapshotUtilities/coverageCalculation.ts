import { BreakdownElement, HoursByState, IInitiateSnapshotBreakdown, IMySnapshotsBreakdown } from "../models/breakdownTypes";
import { StatusNamesEnum } from "../models/enums";
import { IGfsProjects } from "../models/igfsProjects";
import { ISnapshot } from "../models/isnapshot";
import { SnapshotStatuses } from "../models/status";

export default class CoverageCalculation {
    public static getMySnapshotsBreakdown(snapshots: ISnapshot[], projects: IGfsProjects[]): IMySnapshotsBreakdown {
        const totalGFSHours = this.getTotalGFSHours(projects);
        const hoursByState = this.getHoursByState(snapshots, totalGFSHours);

        const acknowledgedAndReviewBreakdown: BreakdownElement = {
            name: `${SnapshotStatuses.acknowledged.displayText} + ${SnapshotStatuses.review.displayText}`,
            value: hoursByState.acknowledged.value + hoursByState.review.value,
            pct: hoursByState.acknowledged.pct + hoursByState.review.pct
        }
        const notCoveredAndDraftBreakdown: BreakdownElement = {
            name: `Not covered + ${SnapshotStatuses.draft.displayText}`,
            value: totalGFSHours - acknowledgedAndReviewBreakdown.value,
            pct: 1 - acknowledgedAndReviewBreakdown.pct
        }

        const result: IMySnapshotsBreakdown = {
            totalHours: totalGFSHours,
            [StatusNamesEnum.acknowledged]: hoursByState.acknowledged,
            [StatusNamesEnum.review]: hoursByState.review,
            acknowledgedAndReview: acknowledgedAndReviewBreakdown,
            notCoveredAndDraft: notCoveredAndDraftBreakdown
        }

        return result;
    }

    public static getInitiateSnapshotsBreakdown(snapshots: ISnapshot[], projects: IGfsProjects[], addedHours: number): IInitiateSnapshotBreakdown {
        const totalGFSHours = this.getTotalGFSHours(projects);
        const hoursByState = this.getHoursByState(snapshots, totalGFSHours);
        
        const addedHoursBreakdown: BreakdownElement = {
            name: 'Added',
            value: addedHours,
            pct: this.getHoursPercent(addedHours, totalGFSHours)
        }
        const totalBreakdown: BreakdownElement = {
            name: '', 
            value: hoursByState.acknowledged.value + hoursByState.review.value + addedHoursBreakdown.value, 
            pct: hoursByState.acknowledged.pct + hoursByState.review.pct + addedHoursBreakdown.pct
        }
        const notCoveredBreakdown: BreakdownElement = {
            name: 'Not Covered',
            value: totalGFSHours - (totalBreakdown.value + hoursByState.draft.value),
            pct: 1 - (totalBreakdown.pct + hoursByState.draft.pct)
        }

        const result: IInitiateSnapshotBreakdown = {
            totalHours: totalGFSHours,
            [StatusNamesEnum.acknowledged]: hoursByState.acknowledged,
            [StatusNamesEnum.review]: hoursByState.review,
            added: addedHoursBreakdown,
            total: totalBreakdown,
            [StatusNamesEnum.draft]: hoursByState.draft,
            notCovered: notCoveredBreakdown
        }

        return result;
    }

    public static getHoursByState(snapshots: ISnapshot[], totalGFSHours): HoursByState {
        const statusToState = {
            [StatusNamesEnum.acknowledged]: StatusNamesEnum.acknowledged,
            [StatusNamesEnum.draft]: StatusNamesEnum.draft,
            [StatusNamesEnum.review]: StatusNamesEnum.review,
            [StatusNamesEnum.initiated]: StatusNamesEnum.review,
            [StatusNamesEnum.returnedReviewee]: StatusNamesEnum.review,
            [StatusNamesEnum.returnedReviewer]: StatusNamesEnum.review,
            [StatusNamesEnum.review]: StatusNamesEnum.review,
            [StatusNamesEnum.shared]: StatusNamesEnum.review
        }

        let hoursByState: HoursByState = {
            acknowledged: { name: SnapshotStatuses.acknowledged.displayText, value: 0, pct: 0 },
            draft: { name: SnapshotStatuses.draft.displayText, value: 0, pct: 0 },
            review: { name: SnapshotStatuses.review.displayText, value: 0, pct: 0 }
        }

        snapshots.forEach(snapshot => {
            const value = snapshot.projectHours.reduce((sum, current) => (sum + current), 0);
            const pct = this.getHoursPercent(value, totalGFSHours);

            const stateToAdd = statusToState[snapshot.status];
            if ([null, undefined].includes(stateToAdd)) {
                return;
            }

            hoursByState[stateToAdd].value += value;
            hoursByState[stateToAdd].pct += pct;
        })

        return hoursByState;
    }

    public static getTotalGFSHours(projects: IGfsProjects[]): number {
        return projects.reduce((sum, current) => (sum + current.totalHours), 0);
    }

    public static getHoursPercent(value, totalGFSHours): number {
        const result = value / totalGFSHours;
        if (isNaN(result) || !isFinite(result)) {
            return 0;
        }

        return result;
    }
}