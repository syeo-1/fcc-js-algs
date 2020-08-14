// change average altitude to orbital periods (in seconds)
// values should be rounded to the nearest whole number

//period = 2pi * root(a^3/miu)
// a = orbit's semi major axis
// miu = GM
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    const twoPi = 2*Math.PI
    let result = arr.map(satellite => {
        let newSatellite = {}
        newSatellite.name = satellite.name
        newSatellite.orbitalPeriod = Math.round(twoPi * Math.sqrt(Math.pow(earthRadius+satellite.avgAlt,3)/GM))
        return newSatellite
    })
    // for (let i = 0 ; i < arr.length ; i++) {
    //     console.log(arr[i])
    // }
    return result;
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))