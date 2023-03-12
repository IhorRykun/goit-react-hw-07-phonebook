import * as phonebookApi from '../../fetchApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fatchAll',
  async (_, thunkAPI) => {
    try {
      const resp = await phonebookApi.getContacts();
      return resp;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const { name, number } = newContact;
      const resp = await phonebookApi.addContacts(name, number);
      return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      const resp = await phonebookApi.deleteContacts(id);
      return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
