function addTogether() {
    // if (typeof arguments[0] === 'number') console.log("hi")
    // console.log(typeof arguments[0])
    if (arguments.length == 2) {
        if (typeof arguments[0] !== 'number'
        || typeof arguments[1] !== 'number') return undefined
        return arguments[0]+arguments[1]
    } else {
        if (typeof arguments[0] !== 'number') return undefined
        return (num) => typeof num === 'number' ? arguments[0]+num : undefined
    }
    // return arguments.length
}

console.log(addTogether(1)("he"))