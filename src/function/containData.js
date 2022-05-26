import converttemp from "./convertfaren"

function containData( WeathData ){

    const dataObj = {
        temp: converttemp(WeathData.current_observation.condition.temperature),
        humid: WeathData.current_observation.atmosphere.humidity,
        text: WeathData.current_observation.condition.text,
        sunrise: WeathData.current_observation.astronomy.sunrise,
        sunset: WeathData.current_observation.astronomy.sunset,
        city: WeathData.location.city,
        country: WeathData.location.country,
        lat: WeathData.location.lat,
        lng: WeathData.location.long,
        forecast: WeathData.forecasts,
        windSpeed: WeathData.current_observation.wind.speed
      }

    return dataObj
}

export default containData