import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
  photo: { title: '', url: '' },
};

export const fetchPhotoDetailThunk = createAsyncThunk(
  'photoDetail/item',
  async (id) => {
    const photo = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`).then((response) => response.data)
      .catch((error) => error);

    return photo;
  },
);

export const editPhotoDetailThunk = createAsyncThunk(
  'photoDetail/edit',
  async ({ id, title }) => {
    const photo = await axios.patch(`https://jsonplaceholder.typicode.com/photos/${id}`,
      { title }, { 'Content-Type': 'application/json' }).then((response) => response.data)
      .catch((error) => error);

    return photo;
  },
);

const photoEditSlice = createSlice({
  name: 'photoDetail',
  initialState,
  reducers: {
    updateTitle: (state, action) => {
      state.photo.title = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotoDetailThunk.fulfilled, (state, action) => {
      state.photo = action.payload;
    });
  },
});

export const { updateTitle } = photoEditSlice.actions;
export default photoEditSlice.reducer;
