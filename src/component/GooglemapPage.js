import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux';

const containerStyle = {
  width: '460px',
  height: '230px'
};


function GooglemapPage() {
  const [lat, lng] = useSelector(state => [state.data.data.lat, state.data.data.lng])
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCSYymLTsXwSFX_kItMCHNZGheGkYuOttY"
  })
  
  const center = {
    lat: lat,
    lng: lng
  };

  const zoom = 8

  const [map, setMap] = React.useState(null)
  const [show, setShow] = React.useState(false)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  setTimeout(() => {
    setShow(true)
  }, 1000)

  return isLoaded ? 
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */ }
      
      {show ?  <Marker position={center} /> : <p></p> }
  </GoogleMap>
   : <></>
}

export default React.memo(GooglemapPage)