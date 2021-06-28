const fs = require('fs')
const path = require('path')
const appConfig = JSON.parse(fs.readFileSync('./config.json'))

const uniqid = require('uniqid');
const { JsonDB } = require('node-json-db')
const { Config } = require('node-json-db/dist/lib/JsonDBConfig')
var db = new JsonDB(new Config(path.join(__dirname, 'app-data.json'), true, false, '/'))
// let newQueueId = uniqid('queue-')
// db.push(`/queue/${newQueueId}`, {
//   id: newQueueId,
//   name: 'First Queue',
//   description: 'First Queue Desc',
//   roles: ['my-app-manager'],
//   formIds: []
// })
// let newFormId = uniqid('form-')
// db.push(`/form/${newFormId}`, {
//   id: newFormId,
//   name: 'First Form',
//   description: 'First Form Desc',
//   fields: null,
//   submitQuery: null
// })
// let newWorkId = uniqid('work-')
// db.push(`/work/${newWorkId}`, {
//   id: newWorkId,
//   queueId: 'queue-4eptbxokqenwomk',
//   formId: newFormId,
//   workDataIds: [],
//   auditLogs: null
// })
// let newFieldId = uniqid('field-')
// db.push(`/field/${newFieldId}`, {
//   name: 'first field',
//   icon: null,
//   color: null,
//   hint: 'test hint',
//   required: false,
//   disabled: false,
//   type: 'text'
// })
const { ApolloServer, gql, AuthenticationError } = require('apollo-server');
let jwt = require('jwt-simple');

const { loadFilesSync } = require('@graphql-tools/load-files')
const { mergeTypeDefs } = require('@graphql-tools/merge');
const loadedFiles = loadFilesSync(path.join(__dirname, '**', 'schema.graphql'))
const typeDefs = mergeTypeDefs(loadedFiles)
const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8'))
const resolvers = {
  Query: {}, Mutation: {}
};
const resolverNodes = fs.readdirSync(path.join(__dirname, 'resolvers'))
for(let resolverName of resolverNodes){
  let resolverModule = require(path.join(__dirname, 'resolvers', resolverName))
  for(let ind in resolverModule.Query){
    if(resolvers.Query[ind]) throw `Duplicate query name in resolvers: ${ind}`
    else resolvers.Query[ind] = resolverModule.Query[ind]
  }
  for(let ind in resolverModule.Mutation){
    if(resolvers.Mutation[ind]) throw `Duplicate mutation name in resolvers: ${ind}`
    else resolvers.Mutation[ind] = resolverModule.Mutation[ind]
  }
}

const appResolvers = {Query: {}, Mutation: {}}
appResolvers.Query.myUser = (parent, args, context, info)=>{
  let user = context?.user
  if(!user) user = {}
  user.roles = context.roles;
  console.log('user', user)
  return user;
}
appResolvers.Query.Users = (parent, args, context, info)=>{
  return []
}
appResolvers.Query.Queues = (parent, args, context, info)=>{
  let queues = db.getData('/queue')
  let myQueues = []
  for(let ind in queues){
    let queue = queues[ind]
    for(let role of context?.roles){
      if(queue.roles.includes(role)){
        queue.roles = [role];
        myQueues.push(queue)
        break;
      }
    }
  }
  return myQueues
} 
appResolvers.Query.Works = (parent, args, context, info)=>{
  let queues = db.getData('/queue')
  if(!queues) queues = [];
  let myWork = [];
  for(let ind in queues){
    let queue = queues[ind]
    if(context?.roles?.some(role => queue?.roles?.includes(role))){
      if(queue?.workIds){
        for(let workId of queue?.workIds){
          let work = db.getData(`/work/${workId}`)
          myWork.push(work)
        }
      }
    }
  }
  console.log('mywork', myWork)
  return myWork
}
appResolvers.Query.Forms = (parent, args, context, info)=>{
  console.log('forms', args)
  return []
}
appResolvers.Query.Fields = (parent, args, context, info)=>{
  console.log('forms', args)
  return []
}
appResolvers.Mutation.createForm = (parent, args, context, info)=>{
  console.log('create form hit', args)
  return null;
  if(context?.roles?.includes('my-app-manager') || !args.createForm){
    let formId = uniqid('form-')
    let form = args.createForm
    form.id = formId;
    console.log('creating form', formId, form)
    db.push(`/forms/${formId}`, form)
  }else{
    console.log('not creating form')
    return null;
  }
}
for(let ind in appResolvers.Query){
  if(resolvers.Query[ind]) throw `Resolver attempted to use reserved query name: ${ind}`
  resolvers.Query[ind] = appResolvers.Query[ind];
}
for(let ind in appResolvers.Mutation){
  if(resolvers.Mutation[ind]) throw `Resolver attempted to use reserved mutation name: ${ind}`
  resolvers.Mutation[ind] = appResolvers.Mutation[ind];
}
//fs.writeFileSync(path.join(__dirname, '..', '..', 'src', 'app', '_services', 'api', 'schema.json'), JSON.stringify({typeDefs: typeDefs}))
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => {
      let token = req.headers[appConfig.jwtHeader];
      if(!token) return {}
      if(!token) throw new AuthenticationError('No JWT present.')
      user = jwt.decode(token, appConfig.jwtSecret);
      if(!user) return {}
      if(!user) throw new AuthenticationError('Invalid JWT')
      let roles = []
      for(let ind in user?.roles){
        let userRole = user.roles[ind]
        let roleMap = false
        if(userRole) roleMap = config.roleMap[userRole]
        if(roleMap && !roles.includes(roleMap)) roles = roles.concat(roleMap);
      }
      return {user: user, roles: roles};
  }
});
server.listen(4201).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})