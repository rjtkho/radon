const trim=function(){
   let nameTrim=" functionUp  "
   console.log(nameTrim.trim())
}

const lowerCase=function(){
    let nameLowerCase="RAJAT KHOBRAGADE"
    console.log("ToLowerCase: "+nameLowerCase.toLowerCase())
}
const upperCase=function(){
    let nameUpperCase="rajat khobragade"
    console.log("ToUpperCase:  "+ nameUpperCase.toUpperCase())
}

module.exports.trim = trim
module.exports.lowerCase=lowerCase
module.exports.upperCase=upperCase