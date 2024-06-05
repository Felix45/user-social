/**
 * This file contains the slice for the authentication a user during logging in
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
  user: null,
};

export const userLoginThunk = createAsyncThunk(
  'auth/signIn',
  async (response) => response,
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      return {
        ...state, user: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLoginThunk.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
