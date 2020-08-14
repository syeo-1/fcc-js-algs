function convertToRoman(num) {
    let numArr = []
    if (num >= 1000) {
        while (num >= 1000) {
            numArr.push("M")
            num -= 1000
        }
    }
    if (num >= 900) {
        numArr.push("CM")
        num -= 900
    }
    if (num >= 500) {
        numArr.push("D")
        num -= 500
    }
    if (num >= 400) {
        numArr.push("CD")
        num -= 400
    }
    if (num >= 100) {
        while (num >= 100) {
            numArr.push("C")
            num -= 100
        }
    }
    if (num >= 90) {
        numArr.push("XC")
        num -= 90
    }
    if (num >= 50) {
        numArr.push("L")
        num -= 50
    }
    if (num >= 40) {
        numArr.push("XL")
        num -= 40
    }
    if (num >= 10) {
        while (num >= 10) {
            numArr.push("X")
            num -= 10
        }
    }
    if (num === 9) {
        numArr.push("IX")
        num -= 9
    }
    if (num >= 5) {
        numArr.push("V")
        num -= 5
    }
    if (num === 4) {
        numArr.push("IV")
        num -=4
    }
    if (num > 0) {
        while (num > 0) {
            numArr.push("I")
            num -= 1
        }
    }
    return numArr.join("")
}

console.log(convertToRoman(3999))