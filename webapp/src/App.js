import React, { Suspense } from "react";
import { Provider, connect } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
/**
 * Project Imports
 */
import RootRouter from "./router";
import appReducer from "./reducers";
import { PageLoader } from "./components";

export const store = configureStore({
  reducer: appReducer,
});

const mapStateProps = () => ({});

const RootState = connect(mapStateProps, {})(RootRouter);

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<PageLoader />}>
        <Provider store={store}>
          <RootState />
        </Provider>
      </Suspense>
    </div>
  );
};

export default App;
