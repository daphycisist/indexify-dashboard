import { createApi } from '@reduxjs/toolkit/query/react';
import { CompanyInterface } from '../../types';
import axiosBaseQuery from '../../services/customBaseQuery';

// Define a service using a base URL and expected endpoints
export const companyApi = createApi({
  reducerPath: 'companyApi',
  tagTypes: ['Companies'],
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://company-lookup.herokuapp.com/api/v1',
  }),
  endpoints: (builder) => ({
    login: builder.mutation<{token: string}, { email: string }>({
      query: (request) => ({
        url: `/auth/login`,
        method: 'post',
        data: request,
      }),
    }),
    getAllCompanies: builder.query<CompanyInterface, number>({
      query: (page) => ({ url: `/company?page=${page}`, method: 'get' }),
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
