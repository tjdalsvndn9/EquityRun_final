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

const jobTagType = new GraphQLObjectType({
  name:'Tag',
  fields:() => (
    {
      name:{type:GraphQLString }
    }
  )
})

module.exports = jobTagType;
