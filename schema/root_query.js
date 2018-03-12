const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull,GraphQLString } = graphql;
const jobType = require('./jobType');
const tagType = require('./jobTagType');
const Job = mongoose.model('Job');


const rootQuery = new GraphQLObjectType({
  name:"rootQuery",
  fields:() => (
    {
      job:{
        type:jobType,
        args: {id:{type: new GraphQLNonNull(GraphQLString)}},
        resolve(parentValue,{id}){
          return Job.find(id)
        }
      }
    }
  )
})

module.exports = rootQuery
