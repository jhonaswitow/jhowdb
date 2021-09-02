const fs = require("graceful-fs")

module.exports = function remove(option, number) {
    if(!option) throw new TypeError(
        "You didn't set any key!"
    )
   if(!number) throw new TypeError (
     "no value has been added!"
     )
    let a = JSON.parse(fs.readFileSync("jhowdb.json", "utf8"))

  if(!a[option]) {
      fs.writeFileSync("jhowdb.json", JSON.stringify({
    
      [option]: 0     
    }, null, 2))
                       }
  
  if (typeof number === "object") {
    return fs.writeFileSync("jhowdb.json", JSON.stringify({
        [option]: number
    }, null, 2))
} else {
    if(isNaN(number)) throw new TypeError(
      `${number} is not a number!`
    )
a[option] -= number
    return fs.writeFileSync("jhowdb.json", JSON.stringify(a, null, 2))
  }
}
