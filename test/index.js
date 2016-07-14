'use strict'

const fs = require('fs')
const should = require('should')
const tinydb = require('..')

describe('测试用例:', _ => {

    it('基础测试', () => {
        let db = new tinydb

        db.set('key', 'val')
        db.get('key').should.equal('val')

        db.del('key')
        should(db.get('key')).be.exactly(undefined)
    })

    it('多次实例化测试', () => {
        new tinydb()
            .set('key', 'val')
            .get('key').should.equal('val')

        new tinydb()
            .set('key', 'newval')
            .get('key').should.equal('newval')
    })

    it('复杂数据测试', () => {
        new tinydb()
            .set('obj', {a: {b: {c: 1}, d: 2}})
            .set('obj', {a: {b: {c: 5}}})
            .get('obj').should.be.eql({a: {b: {c: 5}}})
    })

})
