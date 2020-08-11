function spinalCase(str) {
    return str.toLowerCase().split(/\W/).join("-")
}
  
console.log(spinalCase('This Is Spinal Tap'))
  