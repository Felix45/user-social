/**
 * This file contains the slice for all users data.
 */
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
  people: null,
};

export const fetchPeopleThunk = createAsyncThunk(
  'people/list',
  async () => {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users').then((response) => response.data)
      .catch((error) => error);

    return users;
  },
);

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchPeopleThunk.fulfilled, (state, action) => {
      state.people = action.payload;
    });
  },
});

export default peopleSlice.reducer;
