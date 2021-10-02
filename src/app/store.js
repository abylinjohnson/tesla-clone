import { configureStore } from "@reduxjs/toolkit";
import carSlice from "../features/carSlides/carSlice";
export const store = configureStore({
  reducer: {
    car: carSlice,
  },
});
