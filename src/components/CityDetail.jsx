import { Box, Typography } from "@mui/material";
import React from "react";

const CityDetail = ({ city }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      pt={{ xs: 2, md: 0 }}
      px={2}
      pb="2rem"
      sx={{ textAlign: { xs: "center", md: "left" } }}
    >
      <Typography
        variant="h2"
        py={2}
        sx={{
          background: "linear-gradient(45deg, #fff 30%, #64dd17 90%)",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {city.label}
      </Typography>
      <Typography variant="body1" py={{ md: "1rem" }}>
        Coordinates: {city.lat.toFixed(4)}, {city.lon.toFixed(4)}
      </Typography>
    </Box>
  );
};

export default CityDetail;
