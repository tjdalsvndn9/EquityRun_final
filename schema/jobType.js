const mongoose = require('mongoose');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');
const Job = mongoose.model('Job');




const jobType = new GraphQLObjectType({
  name:'Job',
  fields:() => (
    {
      id:{type: GraphQLString},
      title:{type:GraphQLString},
      description:{type:GraphQLString},
      deadline:{type:GraphQLString},
      equity:{type:GraphQLInt},
      category:{type:GraphQLString},
      userId:{type: new GraphQLNonNull(GraphQLString)},
      tags:{
        type:new GraphQLList(require('./jobTagType')),
        resolve(parentValue,args){
          return Job.find(parentValue.id)
          .then(job => job.tags)
        }
      }
    }
  )
})


module.exports = jobType;
