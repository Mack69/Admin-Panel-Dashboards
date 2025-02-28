const validate = (schema) => async (req, res,next) =>{
    try {

        const parseBody = await schema.parse(req.body);
        req.body=parseBody;
        next();

    } catch (error) {
        console.log(error);
        const status =400;
        const message = "Enter Valid details";
        const displayError = error.errors[0].message;

        const err = {
            status,
            message,
            displayError,
        };
        next(err);
    }

};

module.exports=validate;