function waitingData(data){
    console.log(data)
    if(data !== undefined){
        return(data)
    }else{
        return{
            location: {
                city: null,
                country: null,
                lat: null,
                long: null,
                region: null,
                timezone_id: null,
                woeid: null,
            }, 
            current_observation: {
                astronomy: {sunrise: null, sunset: null},
                atmosphere: {humidity: null, visibility: null, pressure: null, rising: null},
                condition: {code: null, text: null, temperature: null},
                pubDate: null,
                wind: {chill: null, direction: null, speed: null}
            },
            forecasts: [
                {day: 'loading...', date: null, low: null, high: null, text: null},
                {day: 'loading...', date: null, low: null, high: null, text: null},
                {day: 'loading...', date: null, low: null, high: null, text: null},
                {day: 'loading...', date: null, low: null, high: null, text: null},
                {day: 'loading...', date: null, low: null, high: null, text: null},
                {day: 'loading...', date: null, low: null, high: null, text: null},
                {day: 'loading...', date: null, low: null, high: null, text: null},
                {day: 'loading...', date: null, low: null, high: null, text: null},
                {day: 'loading...', date: null, low: null, high: null, text: null},
                {day: 'loading...', date: null, low: null, high: null, text: null},
            ]
        }

    }
}
export default waitingData