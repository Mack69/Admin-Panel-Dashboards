const errorHandling = (err,req,res,next) => {
    const status = err.status || 500;
    const message = err.message ||"Backend Error";
    const displayError = err.displayError || "Error from Server";

    return res.status(status).json({message});

};

module.exports=errorHandling;