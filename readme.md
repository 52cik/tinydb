# TinyDB

> 简易 json 本地存储


## 安装

``` sh
$ npm install 52cik/tinydb
```

## 使用

``` js
let db = new tinydb

db.set('key', 'val')

// 退出时自动保存，所以无须写这行
// db.save()
```

再次打开取值操作

``` js
let db = new tinydb

db.get('key') === 'val' // true
```


简化操作

``` js
new tinydb()
  .set('key1', 'val')
  .set('key2', {val: 2})
  .set('key3', [1, '2', {a: 3}])
```


综合操作

``` js
let db = new tinydb
db.set('key1', 'val')
  .del('key1')
  .set('key2', [1, '2', {a: 3}])

let val1 = db.get(key1) // undefined
let val2 = db.get(key2) // [1, '2', {a: 3}]
```
