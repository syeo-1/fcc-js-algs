function sumPrimes(num) {
    if (num === 2) return 2
    if (num === 1) return 1

    let result = 0
    for(let i = 2 ; i <= num ; i++) {
        let isPrime = false
        for(let j = 2 ; j <= i ; j++) {
            if(j === i) isPrime = true
            if(i%j === 0) break
        }
        if (isPrime) result += i
    }
    return result
}

console.log(sumPrimes(10))//should print out 17
  