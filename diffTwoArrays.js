function diffArray(arr1, arr2) {
  let diff1 = arr1.filter(num => {
    if (!arr2.includes(num)) return num
  })
  let diff2 = arr2.filter(num => {
    if (!arr1.includes(num)) return num
  })
  return [...diff1, ...diff2] 
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))