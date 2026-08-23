const erorrMidedelware = (err, req, res, next)=>{
    console.erorr(err)
    if (err.name==="validationErorr"){
        statusCode=400;
        const massages = Object.values(err.error).map(error=>error.massage),
        massage = massages.join(",")
    }
           if (err.name==="castError"){
        statusCode=400;
      message="email already exist";
    }
    res.status(statusCode).json({});
}
module.exports = errorMiddelware;