'use strict'

const fs = require('fs')

class TinyDB {
  constructor(file, data) {
    this.file = file || 'db.json'
    this.data = data || {}

    this.load()

    process.on('exit', _ => this.save())
  }

  load() {
    if (fs.existsSync(this.file)) {
      Object.assign(this.data, JSON.parse(fs.readFileSync(this.file).toString().trim() || '{}'))
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
    delete this.data[key]
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
