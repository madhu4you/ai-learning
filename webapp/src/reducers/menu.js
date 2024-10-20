// types
import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  openItem: ["home"],
};

// ==============================|| SLICE - MENU ||============================== //

const menu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    activeMenu(state, action) {
      state.openItem = action.payload.openItem;
    },
  },
});

export default menu.reducer;

export const { activeMenu } = menu.actions;
