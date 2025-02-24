import { configureStore } from "@reduxjs/toolkit";

import thisDayReducer from "../reducer/thisDayReducer";


function loadState() {
    try {
      const serializedState = localStorage.getItem("reduxState");
      if (serializedState === null) {
        return undefined; // Let reducers initialize the state if nothing is stored
      }
      return JSON.parse(serializedState);
    } catch (error) {
      console.error("Could not load state", error);
      return undefined;
    }
  }

function saveState(state: any) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("reduxState", serializedState);
    } catch (error) {
        console.error("Could not save state", error);
    }
}
  
  // Load any persisted state
const preloadedState = loadState();

const store = configureStore({
    reducer: {
        thisDayReducer,
    },
     // Initialize store with persisted state, if available
});

store.subscribe(() => {
    saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export default store;