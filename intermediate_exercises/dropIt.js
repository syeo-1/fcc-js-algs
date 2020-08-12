function dropElements(arr, func) {
    let i = 0
    while(!func(arr[i])) {
        arr.shift()
    }
    return arr
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))