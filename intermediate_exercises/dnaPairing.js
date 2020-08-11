function pairElement(str) {
    let result = []

    for (let i = 0 ; i < str.length ; i++) {
        let topush = []
        if (str[i] === "A") {
           topush.push(str[i], "T") 
        } else if (str[i] === "C") {
           topush.push(str[i], "G") 
        } else if (str[i] === "T") {
           topush.push(str[i], "A") 
        } else if (str[i] === "G") {
           topush.push(str[i], "C") 
        }
        result.push(topush)
    }
    return result
}

console.log(pairElement("ATCGA"))
