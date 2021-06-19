import Axios, {AxiosRequestConfig} from 'axios';
import useAxios, {configure} from 'axios-hooks';

export const axios = Axios.create({
  baseURL: 'https://api.jikan.moe/v3/',
});
configure({axios});

export const useGet = <ResType>(
  url: string,
  params?: AxiosRequestConfig['params'],
) => useAxios<ResType>({url, params});
