import React from 'react'
import Menubar from './Menu.js'





function Map() {


  return (
    <div>
        <Menubar  />
        {/* <Container border={'1px solid black'} maxW="70%" height={'500px'}>
            <Text fontSize={'5xl'}>Map</Text>
        </Container> */}
        <iframe src="https://www.ventusky.com/" width={'100%'} height={'1000px'}></iframe>

    </div>
  )
}

export default Map
