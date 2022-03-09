import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CompanyInterface } from '../../types';

export interface CompanyState {
  token: string | null;
  companies: CompanyInterface[];
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
    addCompany: (state, action: PayloadAction<CompanyInterface[]>) => {
      state.companies = action.payload;
    },
    setCredentials: (state, action: PayloadAction<string>) => {
        state.token = action.payload;
        state.isAuthenticated = true;
    },
  },
});

export const { addCompany, setCredentials } = companySlice.actions;
export default companySlice.reducer;
