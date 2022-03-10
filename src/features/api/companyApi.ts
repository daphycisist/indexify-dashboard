import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../store';
import { CompaniesResponseType } from '../../types';

const baseUrl = process.env.REACT_APP_BASE_URL;
export const companyApi = createApi({
  reducerPath: 'companyApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).companies.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, { email: string }>({
      query: (request) => {
        return {
          url: `/auth/login`,
          method: 'POST',
          body: request,
        };
      },
    }),
    getCompanies: builder.query<
      CompaniesResponseType,
      { page: number; search: string }
    >({
      query: ({ page, search }) => ({
        url: `company/${search}?page=${page}`,
        method: 'GET',
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCompaniesQuery, useLoginMutation } =
  companyApi;
