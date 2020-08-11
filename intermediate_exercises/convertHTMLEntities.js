function convertHTML(str) {
    let replacement = str.slice()
    replacement = replacement.replace(/&/g, "&amp;")
    replacement = replacement.replace(/</g, "&lt;") 
    replacement = replacement.replace(/>/g, "&gt;") 
    replacement = replacement.replace(/\"/g, "&quot;") 
    replacement = replacement.replace(/\'/g, "&apos;") 
    return replacement
}

console.log(convertHTML('Stuff in "quotation marks"'))