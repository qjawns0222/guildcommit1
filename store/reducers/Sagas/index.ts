import { all, call } from "redux-saga/effects";
import watchLogin from "../LoginSaga";

export default function* rootSaga() {
  yield all([call(watchLogin)]);
}
