import { NextRouter } from "next/router";
import { da } from "../../type";

export interface ActionProps {
  type: string;
  payload: da | string | LoginData | any;
  router: NextRouter;
}

export interface CounterState {
  guild: any;
}

export type RootState = {
  main: CounterState;
};
export type LoginData = {
  id: string;
  password: string;
};
export type LoginJson = {
  login: LoginData[];
};
export type inputlogin = {
  login: String;
};
