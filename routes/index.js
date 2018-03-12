

module.exports = app => {
  app.use(require('./main'));
  app.use(require('./user'));
  app.use('/job',require('./job'));
  //error handler
  app.use((err,req,res,next) => {
    if(err) return res.status(422).send({err:err.message})
  });
}
