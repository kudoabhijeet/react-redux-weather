import React from "react";
import SunIconComponent from "./Components/SunIconComponent";
import WeatherViewer from "./Components/WeatherViewer";

function App() {
  return (
    <div
      className='d-flex flex-column min-vh-100 p-5'
      style={{ backgroundColor: "orange" }}
    >
      <SunIconComponent align='left' />
      <WeatherViewer />
      <SunIconComponent align='right' />
    </div>
  );
}

export default App;
