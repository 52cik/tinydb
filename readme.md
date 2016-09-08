# TinyDB

> 简易 json 本地存储

[![Linux Build][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![node][node-image]][node-url]
[![license MIT][license-image]][license-url]

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


[travis-url]: https://travis-ci.org/52cik/tinydb
[travis-image]: https://img.shields.io/travis/52cik/tinydb/master.svg?label=linux

[coveralls-url]: https://coveralls.io/github/52cik/tinydb?branch=master
[coveralls-image]: https://coveralls.io/repos/52cik/tinydb/badge.svg?branch=master&service=github

[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg

[dependencies-url]: https://david-dm.org/52cik/tinydb
[dependencies-image]: https://img.shields.io/david/52cik/tinydb.svg?style=flat

[node-url]: https://nodejs.org
[node-image]: https://img.shields.io/node/v/gh-badges.svg
