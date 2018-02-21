const {Schema} = require('mongoose');


const courseSchema = new Schema({
  title:String,
  description:String,
  wistiaId:String,
  price:Number,
  ownByTeacher:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  ownByStudent:[{
    user:{type:Schema.Types.ObjectId, ref:'User'}
  }]
})


courseSchema.virtual('totalStudents').get(function () {
  return this.ownByStudent.length;
});


const Course = mongoose.model('User', courseSchema);

module.exports = Course;
