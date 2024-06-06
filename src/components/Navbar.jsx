import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      component="section"
      sx={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: "1rem",
        right: "2rem",
        zIndex: "20",
        transition: "opacity 0.3s ease-in-out",
        opacity: scrollPosition > window.innerHeight / 4 ? 1 : 0,
        visibility:
          scrollPosition > window.innerHeight / 2 ? "visible" : "hidden",
      }}
    >
      <Box
        py={2}
        sx={{
          backgroundColor: "#ffffff1c",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          width: { xs: "100%", sm: "50%" },
          borderBottomLeftRadius: "2rem",
          borderBottomRightRadius: "2rem",
          backdropFilter: "blur(30px)",
          boxShadow: "0 4px 10px #808080",
          rotate: "-90deg",
        }}
      >
        <Typography variant="body2">ClimForecast</Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
