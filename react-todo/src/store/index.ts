import { configureStore } from "@reduxjs/toolkit";

import thisDayReducer from "../reducer/thisDayReducer";

const store = configureStore({
    reducer:{
        thisDayReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;