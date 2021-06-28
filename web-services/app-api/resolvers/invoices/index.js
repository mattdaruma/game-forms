const fs = require('fs')
const path = require('path')
const gqlSchema = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8')

const { JsonDB } = require('node-json-db')
const { Config } = require('node-json-db/dist/lib/JsonDBConfig')
var db = new JsonDB(new Config(path.join(__dirname, 'invoices.json'), true, false, '/'));


module.exports = {
    Query: {
        Invoice: (parent, args, context, info)=>{ 
            let invoice = db.getData(args.id);
            return invoice
        }
    }
}