import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Divider, Paper, Typography } from "@mui/material";
import customTheme from "../style";

const WeatherDetail = ({ lat, lon, apiKey }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
        );
        setWeather(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lon, apiKey]);

  const getWeatherIcon = (temp) => {
    if (temp < -10) return "❄️";
    else if (temp < 0) return "🌨️";
    else if (temp < 10) return "🌧️";
    else if (temp < 20) return "☁️";
    else if (temp < 30) return "⛅";
    else return "☀️";
  };

  if (loading)
    return (
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body3" sx={{ textAlign: "center" }}>
          Loading...
        </Typography>
      </Box>
    );
  if (error)
    return (
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body3" sx={{ textAlign: "center" }}>
          Error: Could not fetch data
        </Typography>
      </Box>
    );
  if (!weather)
    return (
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body3" sx={{ textAlign: "center" }}>
          No weather data available
        </Typography>
      </Box>
    );

  const tempCelsius = weather.main.temp - 273.15;

  return (
    <Box
      px={{ xs: 2, md: 2 }}
      py={{ md: 4 }}
      display="flex"
      justifyContent="between"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="start"
      minHeight={{ md: "80vh" }}
      height={{ xs: "100%", md: "30rem" }}
      width="100%"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mx={{ md: 2 }}
        sx={{
          fontSize: { xs: "10rem", sm: "15rem" },
          // bgcolor: "#ffffff3c",
          boxShadow: { md: "0 0px 28px #6ADF1E7c" },
          border: { md: "1.5px solid #6ADF1E" },
          borderRadius: "0.5rem",
          width: { xs: "100%", md: "40%" },
          height: { xs: "15rem", sm: "20rem", md: "30rem" },
          minHeight: { xs: "40vh", md: "0vh" },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <p
          style={{
            zIndex: "10",
            filter: "drop-shadow(20px 10px 10px #0096FF5c)",
          }}
        >
          {getWeatherIcon(tempCelsius)}
        </p>
        <Box
          sx={{
            width: { xs: "10rem", sm: "16rem" },
            height: { xs: "10rem", sm: "16rem" },
            position: "absolute",
            background: "linear-gradient(-105deg, #5F9EA0 30%, #0047AB 100%) ",
            filter: "blur(20px)",
            borderRadius: "100%",
            zIndex: "0",
          }}
        />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mx={{ md: 2 }}
        width={{ xs: "100%", md: "60%" }}
        height={{ xs: "100%", md: "30rem" }}
        // bgcolor="#ffffff2c"
      >
        <Box
          mx={{ md: 2 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          height="100%"
          bgcolor="#64dd172a"
          py={2}
          sx={{
            width: "100%",
            background: customTheme.palette.background.main,
            // boxShadow: "0 0px 10px #6ADF1E5c",
            border: "1.5px solid #6ADF1E5c",
            borderRadius: "0.5rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            // bgcolor="#ffffff3c"
            zIndex="10"
            px={4}
            sx={{
              background: customTheme.palette.background.main,
              width: "100%",
            }}
          >
            <Box
              display="flex"
              justifyContent="between"
              alignItems="center"
              flexDirection={{ xs: "column", md: "row" }}
              width="100%"
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h3">
                Weather in {weather.name}, {weather.sys.country}
              </Typography>
              <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
              <Typography variant="body1" fontStyle="italic">
                {weather.weather[0].description}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Temperature: {Math.round(tempCelsius)}°C
            </Typography>
          </Box>
          <Divider
            flexItem
            variant="middle"
            sx={{
              my: 2,
              zIndex: "10",
            }}
          />
          <Box
            mx={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            zIndex="10"
            sx={{
              width: "100%",
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection={{ xs: "column", sm: "row" }}
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                px={4}
                display="flex"
                justifyContent="center"
                flexDirection="column"
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Typography variant="body3">
                  Minimum Temp: {Math.round(weather.main.temp_min - 273.15)}°C
                </Typography>
                <Typography variant="body3">
                  Maximum Temp: {Math.round(weather.main.temp_max - 273.15)}°C
                </Typography>
              </Box>
              <Box
                px={4}
                display="flex"
                justifyContent="center"
                flexDirection="column"
                ml={{ xs: 0, md: 1 }}
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Typography variant="body3">
                  Pressure: {weather.main.pressure} hPa
                </Typography>
                <Typography variant="body3">
                  Humidity: {weather.main.humidity}%
                </Typography>
              </Box>
            </Box>
          </Box>
          <div className="gradient-1" />
          <div className="gradient-2" />
        </Box>
        <Box
          py={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection={{ xs: "column", md: "row" }}
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            px={4}
            py={{ xs: 2, md: 0 }}
            display="flex"
            justifyContent="center"
            flexDirection="column"
            sx={{
              background: customTheme.palette.background.main,
              boxShadow: "0 0px 10px #6ADF1E5c",
              border: "1.5px solid #6ADF1E5c",
              borderRadius: "0.5rem",
              width: "100%",
              height: "100%",
            }}
          >
            <Typography variant="body3">
              Visibility: {weather.visibility / 1000} km
            </Typography>
            <Typography variant="body3">
              Wind: {weather.wind.speed} m/s
            </Typography>
            <Typography variant="body3">
              Direction: {weather.wind.deg}°
            </Typography>
            <Typography variant="body3">
              🌥️ Cloudiness: {weather.clouds.all}%
            </Typography>
          </Box>
          <Box
            display={{ xs: "none", md: "flex" }}
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
            fontSize="8rem"
            lineHeight="75%"
            ml={1}
            my={1}
            py={4}
            sx={{
              background: customTheme.palette.background.main,
              boxShadow: "0 0px 10px #6ADF1E5c",
              border: "1.5px solid #6ADF1E5c",
              borderRadius: "0.5rem",
            }}
          >
            {getWeatherIcon(tempCelsius)}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WeatherDetail;
