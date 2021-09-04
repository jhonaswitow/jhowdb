const fs = require("fs")

module.exports = class Jhow {
  constructor(path) {
    this.path = path ? path : "jhowdb.json"
    if(!this.path.endsWith(".json")) this.path = path + ".json"

    if(!fs.existsSync("./" + this.path)) fs.writeFileSync(this.path, JSON.stringify({ }))

  }

  //get
  get(key) {
    if(!key) throw new TypeError(
      "No key has been defined! If you have any questions, please go to: https://discord.gg/zTXBgXFsAY"
    )
    let file = JSON.parse(fs.readFileSync(this.path, "utf8"))
    if(!file[key]) return null
    return String(key).split("/").reduce((a, b) => (a || {})[b], file);
  }

  async add(key, option) {
    if(!key) throw new TypeError(
      "No key has been defined! If you have any questions, please go to: https://discord.gg/zTXBgXFsAY"
    )
    if(!option) throw new TypeError(
      "No option has been defined! If you have any questions, please go to: https://discord.gg/zTXBgXFsAY"
    )
    let file = JSON.parse(fs.readFileSync(this.path, "utf8"))

    if(isNaN(option)) throw new TypeError(
      `${option} is not a number ! If you have any questions, please go to: https://discord.gg/zTXBgXFsAY`
    )


  key = String(key).split('/')
  let b = file
  while (key.length > 1) {
    const a = key.shift()
    b = b[a] = b[a] || {}
  }

     b[key] += option
    

    return fs.writeFileSync(this.path, JSON.stringify(file, null, 2))
 }

 async remove(key, option) {
   if(!key) throw new TypeError(
      "No key has been defined! If you have any questions, please go to: https://discord.gg/zTXBgXFsAY"
    )
    if(!option) throw new TypeError(
      "No option has been defined! If you have any questions, please go to: https://discord.gg/zTXBgXFsAY"
    )
    let file = JSON.parse(fs.readFileSync(this.path, "utf8"))

    if(isNaN(option)) throw new TypeError(
      `${option} is not a number ! If you have any questions, please go to: https://discord.gg/zTXBgXFsAY`
    )


   key = String(key).split('/')
  let b = file
  while (key.length > 1) {
    const a = key.shift()
    b = b[a] = b[a] || {}
  }
     b[key] -= option
    

    return fs.writeFileSync(this.path, JSON.stringify(file, null, 2))
 }

 set(key, option) {
   if(!key) throw new TypeError(
      "No key has been defined! If you have any questions, please go to: https://discord.gg/zTXBgXFsAY"
    )
    if(!option) throw new TypeError(
      "No option has been defined! If you have any questions, please go to: https://discord.gg/zTXBgXFsAY"
    )
    let file = JSON.parse(fs.readFileSync(this.path, "utf8"))


    key = String(key).split('/')
  let b = file
  while (key.length > 1) {
    const a = key.shift()
    b = b[a] = b[a] || {}
  }

    b[key] = option
    return fs.writeFileSync(this.path, JSON.stringify(file, null, 2))
 }

 delete(key) {
   if(!key) throw new TypeError(
      "No key has been defined! If you have any questions, please go to: https://discord.gg/zTXBgXFsAY"
    )

    let file = JSON.parse(fs.readFileSync(this.path, "utf8"))
    key = String(key).split('/')
  let b = file
  while (key.length > 1) {
    const a = key.shift()
    b = b[a] = b[a] || {}
  }
    delete b[key]

   fs.writeFileSync(this.path, JSON.stringify(file, null, 2))
   return true
 }

 all() {
   let file = JSON.parse(fs.readFileSync(this.path, "utf8"))

   return file
 }
}
