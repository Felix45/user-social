import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
  albums: null,
};

export const fetchAlbumsThunk = createAsyncThunk(
  'albums/list',
  async () => {
    const albums = await axios.get('https://jsonplaceholder.typicode.com/albums').then((response) => response.data)
      .catch((error) => error);

    return albums;
  },
);

const albumSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchAlbumsThunk.fulfilled, (state, action) => {
      state.albums = action.payload;
    });
  },
});

export default albumSlice.reducer;