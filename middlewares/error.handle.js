function logErrors(err, req, res, next){
  console.log('logErrors');
  console.error(err);
  next(err); //Si tiene un parametro es middelware de tipo error
}
function errorHandler(err, req, res, next){ //error para devolverlo al cliente
  console.log('errorHandler');
  res.status(500).json({
    message:  err.message, //enviar el error
    stack: err.stack, //donde ocurre el error
  });
}

module.exports = {logErrors, errorHandler} //
