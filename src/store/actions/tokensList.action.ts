import { TokenksListTypes } from "./tokensList.types";
import { ITokenItem } from "store/actions/tokensList.types";

export const fetchTokensRequestAction = (page: number = 0) => ({
  type: TokenksListTypes.FETCH_TOKENS_REQUEST,
  payload: page,
});

export const fetchTokensSuccessAction = (items: ITokenItem[]) => ({
  type: TokenksListTypes.FETCH_TOKENS_SUCCESS,
  payload: items,
});

export const fetchTokensFailureAction = (message: string) => ({
  type: TokenksListTypes.FETCH_TOKENS_FAILURE,
  payload: message,
});
