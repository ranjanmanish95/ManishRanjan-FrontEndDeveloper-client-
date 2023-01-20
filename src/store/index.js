import { configureStore } from "@reduxjs/toolkit";

import historySlice from "./reducers/historySlice";
import payloadSlice from "./reducers/payloadSlice";
import allLaunchesSlice, {
  failedLaunchesSlice,
  successfullLaunchesSlice,
  upcomingLaunchesSlice
} from "./reducers/launchSlice";

const store = configureStore({
  reducer: {
    history: historySlice.reducer,
    payload: payloadSlice.reducer,
    allLaunches: allLaunchesSlice.reducer,
    upcomingLaunches: upcomingLaunchesSlice.reducer,
    successfullLaunches: successfullLaunchesSlice.reducer,
    failedLaunches: failedLaunchesSlice.reducer
  }
});

export default store;
