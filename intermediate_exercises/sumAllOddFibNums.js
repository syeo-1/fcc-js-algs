// return the sum of all odd fibonacci numbers that are less than or equal to num
function sumFibs(num) {
    if (num === 1) return 1
    let result = 1

    let prev = 1
    let current = 1
    while (current <= num) {
        if (current%2 !== 0) result += current
        let next = current + prev
        prev = current
        current = next

    }


    return result
}

console.log(sumFibs(5))//should be 10