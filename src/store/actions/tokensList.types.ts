export enum TokenksListTypes {
  FETCH_TOKENS_REQUEST = "FETCH_TOKENS_REQUEST",
  FETCH_TOKENS_SUCCESS = "FETCH_TOKENS_SUCCESS",
  FETCH_TOKENS_FAILURE = "FETCH_TOKENS_FAILURE",
}

export interface FetchTokensRequestActionType {
  type: TokenksListTypes.FETCH_TOKENS_REQUEST;
  payload: number;
}
export interface FetchTokensSuccessActionType {
  type: TokenksListTypes.FETCH_TOKENS_SUCCESS;
  payload: ITokenItem[];
}

export interface FetchTokensFailureActionType {
  type: TokenksListTypes.FETCH_TOKENS_FAILURE;
  payload: string;
}

export interface IInitialState {
  tokensList: ITokenItem[];
  loading: boolean;
  errors: null | string;
}

export interface ITokenItem {
  csupply: string;
  id: string;
  market_cap_usd: string;
  msupply: string;
  name: string;
  nameid: string;
  percent_change_1h: string;
  percent_change_7d: string;
  percent_change_24h: string;
  price_btc: string;
  price_usd: string;
  rank: number;
  symbol: string;
  tsupply: string;
  volume24: number;
  volume24a: number;
}

export type AdminsListActionTypes =
  | FetchTokensRequestActionType
  | FetchTokensSuccessActionType
  | FetchTokensFailureActionType;
