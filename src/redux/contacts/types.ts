import { IUserInfo } from "../../utils/interfaces";

export enum ContactsViewType {
    TABLE_VIEW = "TABLE_VIEW",
    TILE_VIEW = "TILE_VIEW",
}

export enum ContactsSortType {
    BY_NAME_AZ = "BY_NAME_AZ",
    BY_NAME_ZA = "BY_NAME_ZA",
    NOT_SORTED = "NOT_SORTED",
}

export interface ContactState {
    readonly data: IUserInfo[],
    readonly view: ContactsViewType;
    readonly pageCapacity: number;
    readonly sortType: ContactsSortType;
    readonly currentPage: number;
}