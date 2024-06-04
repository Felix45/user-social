/**
 * This file contains the slice for details of an album.
 */
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
  album: null,
};

export const fetchAlbumDetailThunk = createAsyncThunk(
  'albumDetail/item',
  async (id) => {
    const album = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`).then((response) => response.data)
      .catch((error) => error);

    return album;
  },
);

const albumDetailSlice = createSlice({
  name: 'albumDetail',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchAlbumDetailThunk.fulfilled, (state, action) => {
      state.album = action.payload;
    });
  },
});

export default albumDetailSlice.reducer;
