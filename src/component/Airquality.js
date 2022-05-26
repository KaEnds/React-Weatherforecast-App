import React from "react";
import Menu from "./Menu";
import { useSelector } from "react-redux";
import Airgraph from "./AIRGraph";
import { Box, Text, Button, Image, Link } from "@chakra-ui/react";
import "../style/Airquality.css";
import { convertTime } from "../function/convertTime";
import { Footer } from "./Footer";

function Airquality() {
  const data = useSelector((state) => state.airQual.components);
  const now_date = Date.now();

  return (
    <div className="airqual">
      <Menu />

      <Box display={"flex"} width="60%" justifyContent={"end"} margin="auto">
        <Text margin={"0 20px"}>date: {convertTime(now_date / 1000)[0]}</Text>
        <Box display={"flex"}>
          <Text>Select Time: </Text>
          <input type="time" value={convertTime(now_date / 1000)[1]} />
        </Box>
      </Box>
      <Box width={"60%"} margin="auto">
        <Airgraph />
      </Box>


      <Footer />
    </div>
  );
}

export default Airquality;
