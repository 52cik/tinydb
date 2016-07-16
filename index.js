'use strict'

const fs = require('fs')

class TinyDB {
  constructor(file, data) {
    this.file = file || 'db.json'
    this.data = data || {}
    this._json = ''

    this.load()

    process.on('exit', _ => this.save())
  }

  load() {
    if (fs.existsSync(this.file)) {
      this._json = fs.readFileSync(this.file).toString().trim() || '{}'
      Object.assign(this.data, JSON.parse(this._json))
    }
  }

  save() {
    let json = JSON.stringify(this.data)

    if (json !== this._json) {
      fs.writeFileSync(this.file, json)
      this._json = json
    }
  }

  get(key) {
    return this.data[key]
  }

  set(key, val) {
    this.data[key] = val
    this.save()

    return this
  }

  del(key) {
    delete this.data[key]
    this.save()

    return this
  }

  clear() {
    this.data = {}
    this.save()

    return this
  }
}


// 导出接口
module.exports = TinyDB
