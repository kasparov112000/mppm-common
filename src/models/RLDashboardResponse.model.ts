export type RLDashboardResponseModel = {
    preferredFullName: string,
    managementLevel: string,
    snapshotsInitiated: number,
    totalHoursCharged: number,
    snapshotsAcknowledged: number,
    snapshotsAcknowledgedHoursPercentage: number,
    snapshotsOverdueAsReviewee: number,
    snapshotsOverdueAsReviewer: number
}
