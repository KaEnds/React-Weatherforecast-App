import Menubar from './Menu.js'
import React,{ useState } from 'react'
import { Box, Text, Container, Image } from '@chakra-ui/react'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { useSelector } from 'react-redux'
import '../style/forecast.css'
import { convertTime } from '../function/convertTime.js'
import converttemp from '../function/convertfaren.js'
import Weathergraph from './Weathergraph.js';
import { detect } from '../function/detectTXT.js';
import { Footer } from './Footer.js'


function Forecast() {
    const data = useSelector(state => state.data.data)

    // slider bar
    const [slideMove, setSlideMove] = useState(0)

    const MoveStyle = {
        left: `${slideMove}px`,
        transition: '1s'
    }

    function RightMove(){
        if(slideMove < 0){
            setSlideMove(slide => slide + 700)
        }else{
            setSlideMove(0)
        }
    }
    function LeftMove(){
        if(slideMove > -1400){
            setSlideMove(slide => slide - 700)
        }else{
            setSlideMove(-1400)
        }
    }

  return (
    <div>
        <Menubar  />
        <div className="forecast-contain">

            {/* weather graph */}
            <Box width={'80%'} margin={'auto'} height='700px'>
                <Text float={'left'} padding="3" fontSize={'6xl'}>{data.city}&nbsp;&nbsp;<span className='small-text'>Wether Graph</span></Text>
                <Weathergraph props={data} />
            </Box>

            {/* forecast box */}
            <Box className='main-contain' overflow={'hidden'} width={'90%'} margin="auto" marginTop={'50px'} height="280px" display={'flex'}>
                <div className="slider-Arrow left" onClick={() => RightMove()} ><AiOutlineDoubleLeft /></div>
                <Box className='slider-box' style={MoveStyle} display={'flex'} gap='20px' height={'280px'} alignItems='center' padding={'0 20px'} >
                    {data.forecast.map((data) => {
                        return(
                            <Container className='day-forecast' maxW='70%' bg='yellow.500' width={'230px'} height={'230px'} color='white'>
                                <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                                    <Text fontSize={'3xl'}>{data.day}</Text>
                                    <Text>{convertTime(data.date)[0]}</Text>
                                </Box>
                                <Box>
                                <Image margin={'auto'} marginTop={'20px'} boxSize={'100px'} src={detect(data.text)} />
                                <Text>{data.text}</Text>
                                </Box>
                                <Box display={'flex'} justifyContent='center' gap={'10px'}>
                                    <Text fontSize={'2xl'}>{converttemp(data.low)}°</Text>
                                    <Text fontSize={'2xl'}>{converttemp(data.high)}°</Text>
                                </Box>
                            </Container>
                        )
                    })}
                
                </Box>
                <div className="slider-Arrow right" onClick={() => LeftMove()}><AiOutlineDoubleRight /></div>

            </Box>

        </div>

        <Footer />

    </div>
  )
}

export default Forecast
