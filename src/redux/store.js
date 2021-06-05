import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "./weather/weather";

export default configureStore({
  reducer: {
    weather: WeatherReducer,
  },
});
