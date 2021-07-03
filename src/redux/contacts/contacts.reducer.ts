import {createReducer} from "@reduxjs/toolkit";
import {ContactsSortType, ContactState, ContactsViewType} from "./types";
import {CONTACTS_PER_PAGE} from "../../utils/constants";
import { fetchContacts } from "./contacts.action";

const initialState: ContactState = {
    data: [],
    view: ContactsViewType.TABLE_VIEW,
    pageCapacity: CONTACTS_PER_PAGE,
    sortType: ContactsSortType.BY_NAME_AZ,
    currentPage: 1,
}



export default createReducer(initialState, (builder) => {
    builder.addCase(fetchContacts.fulfilled, (state, {payload}) => {
        state.data = {...payload}
    })
})