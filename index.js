const fs = require("graceful-fs")
if(!fs.existsSync("jhowdb.json")) fs.writeFileSync("jhowdb.json", JSON.stringify({ }))

let met = {
  get: require("./methods/get.js"),
  add: require("./methods/add.js"),
  set: require("./methods/set.js"),
  remove: require("./methods/remove.js"),
}


module.exports = {
    get: met.get,
    add: met.add,
    set: met.set,
    remove: met.remove,
}
