
## See all functions below:
  Functions        |  Examples
------------ | ------------ 
.get()     | `jdb.get("user")`
.add()     | `jdb.add("user", 100)`
.remove()  | `jdb.remove("user", 100)`
.set()     | `jdb.set("user", 50)`
.delete() | `jdb.delete("user")`
.all() | `jdb.all()`
.push() | `jdb.push("user", "a")`

## Examples below:

### Add

```js
const db = require("jhowdb")
const jdb = new db("jhowdb.json") //File where it will be stored

jdb.add("user", 100)

//Or

jdb.add("user/oi/bem", 100)
```

### Remove
```js
const db = require("jhowdb")
const jdb = new db("jhowdb.json") //File where it will be stored

jdb.remove("user", 100)

//Or
jdb.remove("user/oi/bem", 100)
```

### Get
```js
const db = require("jhowdb")
const jdb = new db("jhowdb.json") //File where it will be stored

let value = jdb.get("user") //Also works the "/"
if(value === null) value = 0 //If you don't put this, or ternary, it will return null

console.log(`You have: ${value.money} coins!`)
```

### Set
```js
const db = require("jhowdb")
const jdb = new db("jhowdb.json") //File where it will be stored

jdb.set("guild", "Devcenter best botlist/programming server")

//Or
jdb.set("guild/info", "Devcenter best botlist/programming server")
```

### Delete
```js
const db = require("jhowdb")
const jdb = new db("jhowdb.json") //File where it will be stored

jdb.delete("guild")

//Or
jdb.delete("guild/info")
```

### All
```js
const db = require("jhowdb")
const jdb = new db("jhowdb.json") //File where it will be stored

console.log(jdb.all())
```
