import axios, { AxiosRequestHeaders } from "axios";

import configs from "../global/configs";

const api = axios.create({
  baseURL: configs.API_URL,
});

export default class Request {
  static async get(
    url: string,
    headersParams?: AxiosRequestHeaders,
    queryParams?: object
  ) {
    headersParams = {
      Accept: "application/json",
      ...headersParams,
    };

    const { status, data } = await api.get(url, {
      headers: headersParams,
      params: queryParams,
    });

    return { status, data };
  }
  static async post(
    url: string,
    bodyParams?: number | string | object,
    headersParams?: AxiosRequestHeaders,
    queryParams?: object
  ) {
    headersParams = {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headersParams,
    };

    const { status, data } = await api.post(url, bodyParams, {
      headers: headersParams,
      params: queryParams,
    });

    return { status, data };
  }

  static async put(
    url: string,
    bodyParams?: number | string | object,
    headersParams?: AxiosRequestHeaders,
    queryParams?: object
  ) {
    headersParams = {
      "Content-Type": "application/json",
      ...headersParams,
    };

    const { status, data } = await api.put(url, bodyParams, {
      headers: headersParams,
      params: queryParams,
    });

    return { status, data };
  }

  static async delete(
    url: string,
    headersParams?: AxiosRequestHeaders,
    queryParams?: object
  ) {
    headersParams = {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headersParams,
    };

    const { status, data } = await api.delete(url, {
      headers: headersParams,
      params: queryParams,
    });

    return { status, data };
  }
}
