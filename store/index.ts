import {
  applyMiddleware,
  createStore,
  EmptyObject,
  Middleware,
  Store,
  StoreEnhancer,
} from "redux";
import reducers from "./reducers";
import { MakeStore, createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import { ActionProps, CounterState } from "./types/state";
import { configureStore } from "@reduxjs/toolkit";
import { initialState } from "./reducers/data";
import rootSaga from "./reducers/Sagas";

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makestore: MakeStore<
  Store<
    {
      main: CounterState;
    },
    ActionProps
  >
> = () => {
  const sagamiddleware = createSagaMiddleware({});

  const store = configureStore({
    reducer: reducers,
    middleware: [sagamiddleware],
    devTools: process.env.NODE_ENV !== "production",
  });
  sagamiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<
  Store<
    {
      main: CounterState;
    },
    ActionProps
  >
>(makestore, { debug: true });
