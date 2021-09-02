const fs = require("graceful-fs")

module.exports = function set(key, option) {
  if(!key) throw new TypeError(
    "You didn't set any key!"
  )
  if(!option) throw new TypeError (
     "no value has been added!"
     )
  let a = JSON.parse(fs.readFileSync("jhowdb.json", "utf8"))

  a[key] = option

 
 return fs.writeFileSync("jhowdb.json", JSON.stringify(a, null, 2))
}
