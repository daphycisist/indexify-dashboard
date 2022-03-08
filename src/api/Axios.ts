import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import store from '../store';

const AxiosRequest = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

const axiosErrorMessage = (code: string) => {
  switch (code) {
    case 'ECONNABORTED':
      return {
        data: { message: 'Request terminated due to response timeout' },
      };
    default:
      return { data: { message: 'Something went wrong' } };
  }
};

const requestHeaderConfiguration = (config: AxiosRequestConfig) => {
  let accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    };
  }
  return config;
};

const responseErrorHandler = (error: any) => {
  if (error?.response?.status === 500) {
    const mssg = error?.response.message;
    return Promise.reject({
      response: { data: { message: mssg || 'An internal error has occurred' } },
    });
  }

  if (error?.response?.status === 401) {
    window.localStorage.clear();
    setTimeout(() => window.location.replace('/login'), 1000);
    return Promise.reject({
      response: { data: { message: 'Your session expired. Please Re-Login' } },
    });
  }

  if (error?.isAxiosError) {
    if (error?.code) {
      return Promise.reject({ response: axiosErrorMessage(error.code) });
    }
  }

  if (!error?.response && error?.isAxiosError && !error?.code) {
    return Promise.reject({
      response: { data: { message: 'No Response From Server' } },
    });
  }

  return Promise.reject(error);
};

const responseMiddleWare = (
  interceptorResponse: (res: AxiosResponse<any>) => AxiosResponse<any>
) => {
  return (response: AxiosResponse<any>) => {
    return interceptorResponse(response);
  };
};

AxiosRequest.interceptors.request.use(requestHeaderConfiguration);

AxiosRequest.interceptors.response.use(
  responseMiddleWare((response) => {
    return response;
  }),
  responseErrorHandler
);

export default AxiosRequest;
