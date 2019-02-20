export const API_KEY = '7719cc235c3c4a4381f84089ece47f5f';
export const API_VERSION = 'v2';
export const BASE_URL = 'https://newsapi.org';

export enum ActionType {
  INITIAL_UPDATE,
  SHOW_MAIN,
  SET_SOURCES_LIST,
  SELECT_SOURCE_ITEM,
  ADD_ARTICLES,
  SHOW_ERROR,
}

export enum CustomErrorType {
  DEFAULT_ERROR = 'DEFAULT_ERROR',
  NEWS_API_ERROR = 'NEWS_API_ERROR',
}

export enum ResponseStatus {
  OK = 'ok',
  ERROR = 'error',
}
