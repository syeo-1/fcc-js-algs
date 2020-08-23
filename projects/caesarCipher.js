function rot13(str) {
    console.log(str)
    let result = []
    for (let i = 0 ; i < str.length ; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            let cCode = str.charCodeAt(i)-13
            cCode = cCode < 65 ? cCode+26 : cCode
            result.push(String.fromCharCode(cCode))
        } else {
            result.push(str[i])
        }
    }
    return result.join("")
}

rot13("SERR PBQR PNZC");