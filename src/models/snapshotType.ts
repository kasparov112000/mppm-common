import { TypeNamesEnum } from "./enums"

export type SnapshotType = {
    name: TypeNamesEnum,
    displayText: string
}

export const SnapshotTypes = {
    [TypeNamesEnum.snapshot]: { name: TypeNamesEnum.snapshot, displayText: 'Snapshot' } as SnapshotType,
    [TypeNamesEnum.reinvest]: { name: TypeNamesEnum.reinvest, displayText: 'Reinvest' } as SnapshotType
}