## Presentation

jhowdb is a simple database, with few functions... soon there will be updates like: be able to use / in jdb.get("a/a")

## See all functions below:
  Functions        |  Examples
------------ | ------------ | ------------
.get()     | `jdb.get("user")`
.add()     | `jdb.add("user", 100)`
.remove()  | `jdb.remove("user", 100)`
.set()     | `jdb.set("user", 50)`

## Examples below:

### Add

```js
const jdb = require("jhowdb")

jdb.add("user", {
economy: {
   money: 50 + 50
 }
})

//Or

jdb.add("user", 100)
```

### Remove
```js
const jdb = require("jhowdb")

jdb.remove("user", {
economy: {
   money: 100 - 100
 }
})

//Or
jdb.remove("user", 100)
```

### Get
```js
const jdb = require("jhowdb")

let value = jdb.get("user")
if(value === null) value = 0 //If you don't put this, or ternary, it will return null

console.log(`You have: ${value.money} coins!`)
```

### Set
```js
const jdb = require("jhowdb")

jdb.set("guild", {
 info: "Devcenter best botlist/programming server"
})

//Or
jdb.set("guild", "Devcenter best botlist/programming server")
```
