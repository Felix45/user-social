/**
 * This file contains the redux slice for the photos in an album.
 */
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
  photos: [],
};

export const fetchPhotosThunk = createAsyncThunk(
  'photos/list',
  async (id) => {
    const photos = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`).then((response) => response.data)
      .catch((error) => error);

    return photos;
  },
);

const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotosThunk.fulfilled, (state, action) => {
      state.photos = action.payload;
    });
  },
});

export default photoSlice.reducer;
