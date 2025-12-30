import { apiUserEndpoints } from '../../../packages/core/constants/endpoints.js';
import { baseHttpGet } from '../../_helper/basesHttp.js';
import { responseDataUser } from '../mock/dataUserMock.js';

const url = apiUserEndpoints.getUser.replace(/{(\w+)}/g, ':$1');

const NORMAL_CLIENT = baseHttpGet({ url, response: responseDataUser });

export const apiUserScenario = { NORMAL_CLIENT };
