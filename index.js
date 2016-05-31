'use strict'

const fs = require('fs')

class TinyDB {
  constructor(file, data) {
    this.file = file || 'db.json'
    this.data = data || {}

    if (data) {
      this.save()
    } else {
      this.load()
    }
  }

  load() {
    if (fs.existsSync(this.file)) {
      this.data = JSON.parse(fs.readFileSync(this.file).toString().trim() || '{}')
    }

    return this
  }

  save() {
    fs.writeFileSync(this.file, JSON.stringify(this.data))
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
    delete this._db[key]
    this.save()

    return this
  }

  clear() {
    this.data = {}
    this.save()
  }
}


// 导出接口
module.exports = TinyDB
