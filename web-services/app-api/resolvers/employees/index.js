const fs = require('fs')
const path = require('path')

const { JsonDB } = require('node-json-db')
const { Config } = require('node-json-db/dist/lib/JsonDBConfig')
var db = new JsonDB(new Config(path.join(__dirname, 'employees.json'), true, false, '/'))


module.exports = {

}