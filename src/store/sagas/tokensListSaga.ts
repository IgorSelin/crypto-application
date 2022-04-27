import { call, all, takeLatest, put } from "redux-saga/effects";
import {
  FetchTokensRequestActionType,
  ITokenItem,
  TokenksListTypes,
} from "store/actions/tokensList.types";
import * as Endpoints from "services/index";
import * as TokensListActions from "store/actions/tokensList.action";

function* fetchAdminListWorker(action: FetchTokensRequestActionType) {
  try {
    const { data }: { data: ITokenItem[] } = yield call(
      Endpoints.getTokens,
      action.payload
    );
    yield put(TokensListActions.fetchTokensSuccessAction(data));
  } catch (error: any) {
    yield put(TokensListActions.fetchTokensFailureAction(error.message));
  }
}

export function* tokensListSaga() {
  yield all([
    takeLatest(TokenksListTypes.FETCH_TOKENS_REQUEST, fetchAdminListWorker),
  ]);
}
