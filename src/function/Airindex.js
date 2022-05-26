export function Airindex(index){
    switch (index) {
        case 1:
            return["Good", 'green']
            
        case 2:
            return["Fair", 'blue']

        case 3:
            return["Moderate", 'yellow']

        case 4:
            return["Poor", 'orange']

        case 5:
            return["Very Poor", 'red']


    
        default:
            return null
    }
}