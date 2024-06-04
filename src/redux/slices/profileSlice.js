/**
 * This file contains the slice for the user profile after logging in.
 */
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
  profile: null,
};

export const userProfileThunk = createAsyncThunk(
  'user/profile',
  async (user) => {
    const profile = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
      headers: {
        Authorization: `Bearer ${user.access_token}`,
        Accept: 'application/json',
      },
    }).then((response) => response.data)
      .catch((error) => error);

    return profile;
  },
);

const profileSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    setProfile(state, action) {
      return {
        ...state,
        profile: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userProfileThunk.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
