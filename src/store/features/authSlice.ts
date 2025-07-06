import type { AuthState } from "@/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const blankUser = {
  id: null,
  full_name: null,
  email: null,
  terms: null,
  password: null,
  profile: null,
};

const initialState: AuthState = {
  user: blankUser,
  access: null,
  refresh: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ access: string; refresh: string }>
    ) => {
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
      state.isAuthenticated = true;
    },

    register: (
      state,
      action: PayloadAction<{ full_name: string; email: string }>
    ) => {
      state.isAuthenticated = true;
      state.user.full_name = action.payload.full_name;
      state.user.email = action.payload.email;
    },

    signin: (state, action: PayloadAction<{ email: string }>) => {
      state.isAuthenticated = true;
      state.user.email = action.payload.email;
      state.access = null;
    },

    updateProfile: (
      state,
      action: PayloadAction<{ full_name: string; profile: string }>
    ) => {
      state.user.full_name = action.payload.full_name;
      state.user.profile = action.payload.profile;
    },

    loginFailure: (state) => {
      state.isAuthenticated = false;
      state.user = blankUser;
      state.access = null;
      state.refresh = null;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.user.profile = null;
      state.user.email = null;
      state.user.full_name = null;
      state.access = null;
      state.refresh = null;
      localStorage.removeItem("auth");
    },
  },
});

export const {
  signin,
  setCredentials,
  register,
  updateProfile,
  loginFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
