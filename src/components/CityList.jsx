import React, { useEffect, useState } from "react";
import axios from "axios";
import { Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CityList = ({ onCitySelect }) => {
  const citiesURL =
    "https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000";
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${citiesURL}&rows=20&start=${page * 20}`
      );
      const formattedData = response.data.records.map((record) => ({
        value: record.fields.geoname_id,
        label: `${record.fields.ascii_name}, ${record.fields.cou_name_en}`,
        lon: record.geometry.coordinates[0],
        lat: record.geometry.coordinates[1],
        country: record.fields.country_code,
        population: record.fields.population,
        timezone: record.fields.timezone,
      }));
      setData((prevData) => [...prevData, ...formattedData]);
    } catch (error) {
      console.error("Failed to fetch cities data:", error);
    }
  };

  const theme = useTheme();

  return (
    <Stack
      id="city-list"
      direction="row"
      spacing={2}
      flexWrap="wrap"
      justifyContent="center"
      useFlexGap
      p={2}
      m={2}
      sx={{ width: "100%", minHeight: "100vh", zIndex: "10" }}
    >
      {data.map((item) => (
        <Paper
          elevation={6}
          mx={2}
          bgcolor="#111b3b"
          sx={{
            width: { xs: "100%", sm: "40%", md: "30%"},
            height: {xs:"100%", sm:"10rem"},
            flexBasis: "1",
          }}
          key={item.value}
          onClick={() => onCitySelect(item)}
        >
          <Typography variant="h3" py={2}>{item.label}</Typography>
          <Typography variant="body3">Population: {item.population}</Typography><br />
          <Typography variant="body3" pb={2}>Timezone: {item.timezone}</Typography>
        </Paper>
      ))}
    </Stack>
  );
};

export default CityList;
