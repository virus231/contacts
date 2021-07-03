import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts } from "../../api/contactsApi";


export const fetchContacts = createAsyncThunk(
    'contacts/CONTACTS_FETCH',
    async () => getContacts(),
)