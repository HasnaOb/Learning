import { http, HttpResponse } from 'msw';
import { RESPONSE_STATUS } from './responseStatus.js';

const responseWithDelay = (response, delay = 1000) =>
  new Promise(resolve => setTimeout(() => resolve(response), delay));

const baseHttp = ({
  url,
  response,
  delay = false,
  method = http.get,
  status = RESPONSE_STATUS.OK,
}) => {
  const delayResponse = delay
    ? () => responseWithDelay(HttpResponse.json(response, status))
    : () => HttpResponse.json(response, status);

  return method(url, delayResponse);
};

export const baseHttpGet = ({ url, response, status = RESPONSE_STATUS.OK }) =>
  baseHttp({ url, response, status });
