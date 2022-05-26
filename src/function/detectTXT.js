import { TempIcon } from "../data/TempIcon"

export function detect(text){

    const thunder = text.toLowerCase().includes('thunder')
    const rain = text.toLowerCase().includes('rain')
    const cloud = text.toLowerCase().includes('cloud')
    const sunny = text.toLowerCase().includes('mostly clear')
    const snow = text.toLowerCase().includes('snow')
    const shower = text.toLowerCase().includes('shower')
    const partly = text.toLowerCase().includes('partly cloudy')

    if(thunder){
        return TempIcon.thunderstorms
    }if(rain || shower){
        return TempIcon.rainy
    }if(partly){
        return TempIcon.partly
    }if(cloud){
        return TempIcon.cloudy
    }if(sunny){
        return TempIcon.sunny
    }if(snow){
        return TempIcon.snowy
    }

}
