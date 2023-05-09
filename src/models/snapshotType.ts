import { TypeNamesEnum } from "./enums"

export type SnapshotType = {
    name: TypeNamesEnum,
    displayText: string
}

export const SnapshotTypes = {
    [TypeNamesEnum.snapshot]: { name: TypeNamesEnum.snapshot, displayText: 'snapshot' } as SnapshotType,
    [TypeNamesEnum.reinvest]: { name: TypeNamesEnum.reinvest, displayText: 'reinvest' } as SnapshotType
}