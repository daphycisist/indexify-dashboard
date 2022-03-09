import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../store';
import { CompaniesResponseType, CompanyInterface } from '../../types';

// Define a service using a base URL and expected endpoints
export const companyApi = createApi({
  reducerPath: 'companyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://company-lookup.herokuapp.com/api/v1',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).companies.token;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, { email: string }>({
      query: (request) => ({
        url: `/auth/login`,
        method: 'post',
        data: request,
      }),
    }),
    getAllCompanies: builder.query<CompaniesResponseType, number>({
      query: (page) => ({ url: `/company?page=${page + 1}`, method: 'get' }),
    }),
    getCompany: builder.query<
      CompanyInterface,
      { page: number; search: string }
    >({
      query: ({ page, search }) => ({
        url: `company/${search}?page=${page}`,
        method: 'get',
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCompaniesQuery, useGetCompanyQuery, useLoginMutation } =
  companyApi;
