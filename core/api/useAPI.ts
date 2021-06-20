import Axios from 'axios';
import {configure} from 'axios-hooks';

export const axios = Axios.create({
  baseURL: 'https://api.jikan.moe/v3/',
});

configure({axios});
