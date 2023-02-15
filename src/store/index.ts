import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { learnSlice } from "./slices";

const rootReducer = combineReducers({
  learnReducer: learnSlice.reducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export default setupStore;

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore["dispatch"];
