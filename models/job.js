const mongoose = require('mongoose');
const {Schema} = require('mongoose');


const jobSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String
  },
  deadline:{
    type:String
  },
  equity:{
    type:Number,
    required:true
  },
  category:{
    type:String
  },
  tags:[{name:String}],
  userId:{
    type:Schema.Types.ObjectId,
    ref:"User"
  }
});


jobSchema.statics.add = async function(obj){
  const job = mongoose.model('Job');
  try{
    const newJob = new job(obj);
    const savedJob = await newJob.save();
    return await savedJob;
  }
  catch(err){
    return err;
  }
}

jobSchema.statics.update = async function(obj){
  const job = mongoose.model('Job');
  const {id} = obj;
  try{
    const updatedJob = await job.findByIdAndUpdate(id,obj);
    return await updatedJob
  }
  catch(err){
    return err
  }
};

jobSchema.statics.delete = async function(id){
  const job = mongoose.model('Job');
  try{
    const removedJob = await job.findByIdAndRemove(id);
    return await removedJob;
  }
  catch(err){
    return err;
  }
}
jobSchema.statics.find = async function(id){
  const job = mongoose.model('Job');
  try{
    const featuredJob = await job.findById(id);
    return await featuredJob;
  }
  catch(err){
    return err;
  }
}


const job = mongoose.model('Job',jobSchema);




module.exports = job;
