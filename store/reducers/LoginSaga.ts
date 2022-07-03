import axios from "axios";
import { resolveSoa } from "dns";
import { NextRouter } from "next/router";
import {
  call,
  getContext,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { LOGIN_PENDING, LOGIN_SUCCESS } from "../actions/actionTypes";
import { LoginData, LoginJson } from "../types/state";

const checkdata = async () => {
  const res = await axios.get(
    "https://raw.githubusercontent.com/qjawns0222/caremaker/next%2Bts-15%EC%9D%BC%EC%B0%A8-Saga-login/login.json"
  );

  return res.data;
};
function* checklogin({
  type,
  payload,
  router,
}: {
  type: String;
  payload: LoginData;
  router: NextRouter;
}) {
  try {
    const data: LoginJson = yield call(checkdata);
    const result: LoginData | undefined = data.login.find((res: LoginData) => {
      if (payload.id == res.id && payload.password == res.password) {
        return res;
      }
    });
    if (result) {
      yield put({ type: LOGIN_SUCCESS, payload, router });
      const history = getContext("history");
    } else {
      alert("아이디와 비밀번호 확인해주세요");
    }
  } catch (e) {
    console.log(e);
  }
}
export default function* watchLogin() {
  yield takeLatest(LOGIN_PENDING, checklogin);
}
