import React,{useRef} from "react";
import Menubar from "./Menu.js";
import "../style/Home.css";
import {
  Box,
  Text,
  CircularProgress,
  Image,
  Container,
  Button,
} from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux"
import {  serachAction } from '../action/searchAction'
import GooglemapPage from "./GooglemapPage";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { LatLong } from "../action/searchAction";
import { Airindex } from "../function/Airindex.js";
import { detect } from "../function/detectTXT.js";
import {Link} from 'react-router-dom'
import { Footer } from './Footer.js'





function Home() {
  const [weather, air] = useSelector(state => [state.data, state.airQual.aqi])

  const text = useRef('')
  const dispatch = useDispatch()


  return (
    <div className="Home">
      <Menubar />
      {/* from */}
      <Box width={"70%"} height="100px" margin={"auto"} marginTop="30px" className="searchBar">
        <form onSubmit={(e) => {
            dispatch(serachAction(text.current))
            e.preventDefault()
          }}>
          <label>Search your location
            <input className="serachbar" 
              type="text" 

              onChange={(e) => {
                text.current = e.target.value
              }}
            />
          </label>
          <input className="searchbotton" type="submit" value={'search'} />
        </form>
      </Box>
      <br />

      {/* display current weather */}
      {weather.loading ? <CircularProgress isIndeterminate marginTop={'200px'} margin='auto' color='green.300' /> : 
      <Box
        backgroundColor="#bef"
        w={['1100px']}
        margin={"0 auto"}
        height={"500px"}
        borderRadius={"md"}
        display={"flex"}
        padding={"1%"}>
        <Container bord width="30%">
            <Text>Date: 21--5--2022</Text>
          <Text size='lg' fontSize={'80px'}>{weather.data.temp} °C</Text>
            <Image height={'40px'} margin={'auto'} boxSize={'250px'} src={detect(weather.data.text)}  alt="image"/>
          <Text fontSize={'2xl'}>{weather.data.text}</Text>
        </Container>
        <Container backgroundColor="" width="80%">
          <Container height="240px" margin={'10px 0'}>
            <GooglemapPage />
          </Container>
          <Container textAlign={'start'}>
            <Text fontSize={'5xl'}>{weather.data.city} &nbsp;<span className="country">{weather.data.country}</span></Text>
            <Box paddingLeft={'10px'}>
              <Box display={'flex'}>
                <Box width={'50%'} >
                  <Text padding={'5px 0'} fontSize={'1xl'}>Humidity: {weather.data.humid} %</Text>
                  <Text padding={'5px 0'} fontSize={'1xl'}>WindSpeed: {weather.data.windSpeed} </Text>
                  <Text padding={'5px 0'} fontSize={'1xl'}>sunrise: {weather.data.sunrise} </Text>
                  <Text padding={'5px 0'} fontSize={'1xl'}>sunset: {weather.data.sunset} </Text>
                </Box>
                <Box width={'50%'} textAlign='end' marginLeft={'200px'}>
                  <Box paddingTop='40px' textAlign={'center'} >
                    <Text fontSize={'3xl'}>{Airindex(air.aqi)[0]}</Text>
                    <Link to='#'><Button  colorScheme={Airindex(air.aqi)[1]} size='sm'>Air quality &nbsp;<span><BsBoxArrowUpRight /></span></Button></Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Container>
      </Box>
      }

      <Footer />
    </div>
  );
}

export default Home;
