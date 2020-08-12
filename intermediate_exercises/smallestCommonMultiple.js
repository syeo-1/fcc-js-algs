function smallestCommons(arr) {
    if (arr[1] > arr[0]) {
        for (let i = 2 ; i < Infinity ; i++) {
            for (let j = arr[0] ; j <= arr[1] ; j++) {
                if (i%j !== 0) break
                if (j === arr[1]) return i
            }
        }
    } else {
        for (let i = 2 ; i < Infinity ; i++) {
            for (let j = arr[1] ; j <= arr[0] ; j++) {
                if (i%j !== 0) break
                if (j === arr[0]) return i
            }
        }
    }
}


console.log(smallestCommons([1,5]))//60
