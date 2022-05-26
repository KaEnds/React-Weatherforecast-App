function converttemp( Ftemp ){
    const c = (Ftemp - 32)/1.8
    return parseInt(c)
}

export default converttemp