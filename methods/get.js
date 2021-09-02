const fs = require("graceful-fs")

module.exports = function g(key) {
    if(!key) throw new TypeError(
        "You didn't set any key!"
    )
    let a = JSON.parse(fs.readFileSync("jhowdb.json", "utf8"))
    if(!a[key]) return null
  

    return a[key]
}
