import React from "react";
import { useNavigate } from "react-router-dom";
import CityList from "../components/CityList";
import { Box, Typography, Button } from "@mui/material";
import heroImg from "../assets/hero1.png";
import customTheme from "../style";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCitySelect = (city) => {
    const [name, countryCode] = city.label
      .split(",")
      .map((part) => encodeURIComponent(part.trim()));
    const { lat, lon } = city;
    window.location.href = `/weather/${name}/${countryCode}/${lat}/${lon}`;
  };

  const handleBtn = () => {
    const section = document.getElementById("city-list");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Box
        component="section"
        display="flex"
        alignItems="center"
        flexDirection="column"
        position="relative"
        zIndex="10"
        sx={{
          width: "100%",
          overflow: "hidden",
          padding: { xs: "1rem 1rem", md: "2rem 2rem" },
        }}
      >
        {/* <Navbar/> */}
        <Box
          component="section"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: "#060d21",
            border: "2px solid transparent",
            borderRadius: "2rem",
            overflow: "hidden",
            boxShadow: "0 2px 18px #6ADF1E8c",
            position: "relative",
            zIndex: "0",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              zIndex: "10",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            Clim
            <span
              style={{
                background: "linear-gradient(45deg, #ccff90 30%, #64dd17 90%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Forecast
            </span>
          </Typography>
          <img
            src={heroImg}
            style={{
              position: "absolute",
              width: "46rem",
              right: "-3rem",
              zIndex: "0",
              opacity: "0.6",
            }}
            alt="Hero"
          />
          <Button
            sx={{
              position: "absolute",
              right: "2rem",
              top: "2rem",
              padding: "8px 16px",
            }}
            onClick={handleBtn}
          >
            Get Started
          </Button>
        </Box>
        <span
          style={{
            position: "absolute",
            top: "80vh",
            width: "150vw",
            height: "40vh",
            backgroundColor: "#091331",
            filter: "blur(28px)",
          }}
        />
        <Box
          component="div"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CityList onCitySelect={handleCitySelect} />
          <span
            style={{
              position: "absolute",
              width: "100%",
              zIndex: "0",
            }}
          />
        </Box>
      </Box>
      <div className="gradient-1" />
      <div className="gradient-2" />
    </>
  );
};

export default HomePage;
