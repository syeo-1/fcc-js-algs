function charIsAlNum(c) {
    return /[a-z0-9]/i.test(c)
}

function palindrome(str) {
    let test = []
    // go backwards in array so pop() will be in forward direction
    for(let i = str.length-1 ; i >= 0 ; i--) {
        if (charIsAlNum(str[i])) test.push(str[i].toLowerCase())
    }
    console.log(test)
    let index = 0
    for (let i = str.length-1 ; i >= 0 ; i--) {
        if(charIsAlNum(str[i])) {
            let a = test.pop()
            // console.log(a)
            // console.log(str[i])
            if (str[i].toLowerCase() !== a) return false
        } 
    }
    // console.log(test)
    // console.log(index)
    // console.log(test[index])
    return true
}

console.log(palindrome("lev#el"))