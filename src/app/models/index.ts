import { ResponseStatus } from 'src/app/constants';

interface IResponse {
  status: ResponseStatus;
  code?: string;
  message?: string;
}

export interface ISourcesResponse extends IResponse {
  sources?: ISource[];
}

export interface ITopHeadlinesResponse extends IResponse {
  articles?: IArticle[];
  totalResults?: number;
}

export interface ISource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export interface IArticle {
  source: ITopHeadlineSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface ITopHeadlineSource {
  id: string;
  name: string;
}

export interface IRequestFactoryResult {
  sources: (params?: Dictionary) => Promise<ISource[]>;
  topHeadlines: (params?: Dictionary) => Promise<IArticle[]>;
}

export interface IRequestObject {
  url: string;
  params: Dictionary;
}

export interface Dictionary<T = string> {
  [key: string]: T;
}

export interface IState {
  showButtonVisibility: boolean;
  mainBlockVisibility: boolean;
  articlesListVisibility: boolean;
  sourcesList: ISource[];
  articlesMap: Dictionary<IArticle[]>;
  selectedSourceId: string;
  errorMessage: string;
}
