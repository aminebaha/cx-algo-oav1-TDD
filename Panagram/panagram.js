function isPangram (strings){
   var result = []
   for (let i = 0; i <= strings.length -1 ; i++) {
   if (hasAllAbc(strings[i])) {
     result.push("1")
   } else {
     result.push("0")
   }
  }
 return result.join("")
}

function hasAllAbc(string) {
    let abc = createABC()
    let str = string.split(" ").join("").split("")
    for (let i = 0; i <= str.length; i++){
      checkLetter(str[i], abc)
     }
    if (abc.length === 0 ) {
      return true
    } else {
      return false
    }
 }