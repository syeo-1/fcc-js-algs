function whatIsInAName(collection, source) {
    // Only change code below this line
    let result = collection.filter(obj => {
        for(let prop in source) {
            // if (!obj.hasOwnProperty(prop) && collection[prop] !== source[prop]) {
            //     return
            // }
            if (!obj.hasOwnProperty(prop) || obj[prop] !== source[prop]) {
                console.log(obj[prop])
                return false
            }
            // console.log(prop)
            // console.log(source[prop])
        }
        return true
        // if (obj[Object.keys(source)[0]] === source[Object.keys(source)[0]]) return obj
    })
    // console.log(result)
    //filter the results of collection
    // for each object in source, check if the currently examined object in collection has that property hasownproperty
    // if it has all the properties of source with the same values, then add it to result as part of the filter
    // Only change code above this line
    return result;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))
