import { all } from "redux-saga/effects";
import { tokensListSaga } from "./tokensListSaga";

export default function* rootSaga() {
  yield all([tokensListSaga()]);
}
