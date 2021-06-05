import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    loading: true,
    weatherData: {},
  },
  reducers: {
    SET_WEATHER: (state, action) => {
      state.weatherData = action.payload;
      state.loading = false;
    },
  },
});

export const WeatherData = (state) => state.weather.weatherData;
export const Loading = (state) => state.weather.loading;

export const { SET_WEATHER } = WeatherSlice.actions;

export const FetchWeather = () => (dispatch) => {
  axios
    .get(
      "http://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=a00e8caf7b623f7c15d861c52da9346b&units=metric"
    )
    .then((response) => {
      console.log(response.data.weather);
      dispatch(SET_WEATHER(response.data));
    });
};

export default WeatherSlice.reducer;
