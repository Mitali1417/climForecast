import React from "react";
import { useParams } from "react-router-dom";
import CityDetail from "../components/CityDetail";
import WeatherDetail from "../components/WeatherDetail";
import Box from "@mui/material/Box";
import BackArrow from "../assets/back-arrow.svg";
import { Button } from "@mui/material";

const WeatherPage = () => {
  const { name, countryCode, lat, lon } = useParams();
  const city = {
    label: `${decodeURIComponent(name)}, ${decodeURIComponent(countryCode)}`,
    lat: parseFloat(lat),
    lon: parseFloat(lon),
  };
  const apiKey = "b178065235f8bf8e97088c2bb2b6ba92";

  return (
    <Box
      width="100vw"
      minHeight={{ md: "100vh" }}
      // height="100%"
      py={4}
      overflow="auto"
      component="section"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      position="relative"
    >
      <a
        className="back-button"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "2.5rem",
          height: "2.5rem",
          position: "absolute",
          top: "1rem",
          right: "2rem",
          border: "2px solid #ffffff4c",
          borderRadius: "50%",
        }}
        href="/"
      >
        <img
          src={BackArrow}
          style={{
            width: "3rem",
          }}
          alt="back-button"
        />
      </a>

      <CityDetail city={city} />
      <WeatherDetail lat={city.lat} lon={city.lon} apiKey={apiKey} />
    </Box>
  );
};

export default WeatherPage;
