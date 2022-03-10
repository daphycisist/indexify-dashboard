import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CompanyInterface } from '../../types';

export interface CompanyState {
  token: string | null;
  companies: CompanyInterface[] | undefined;
  isAuthenticated: boolean;
}

const initialState: CompanyState = {
  companies: [],
  token: null,
  isAuthenticated: false,
};

export const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    addCompanies: (
      state,
      action: PayloadAction<CompanyInterface[] | undefined>
    ) => {
      state.companies = action.payload;
    },
    setCredentials: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
     localStorage.removeItem('persist:root');
      localStorage.clear()
      state = initialState;
    },
  },
});

export const { addCompanies, setCredentials, logout } = companySlice.actions;
export default companySlice.reducer;
