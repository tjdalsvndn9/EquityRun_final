const { GraphQLSchema } =  require('graphql');



module.exports = new GraphQLSchema({
  query:require('./root_query')
})
