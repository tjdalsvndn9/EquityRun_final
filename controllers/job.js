const mongoose = require('mongoose');
const Job = mongoose.model('Job');




const addJob = async (req,res,next) => {
  try{
    const addedJob = await Job.add(req.body);
    res.send(addedJob);
  }
  catch(err){
    next(err)
  }
}

const findJob = async(req,res,next) => {
  try{
    const featuredJob = await Job.find(req.params.id);
    res.send(featuredJob)
  }
  catch(err){next(err)}
}







module.exports = {
  addJob,
  findJob
}
