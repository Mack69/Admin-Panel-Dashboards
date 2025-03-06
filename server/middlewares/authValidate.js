// const validate = (schema) => async (req, res,next) =>{
//     try {

//         const parseBody = await schema.parseAsync(req.body);
//         req.body=parseBody;
//         next();

//     } catch (error) {

//         const status = 400;
//         const message = "Enter Valid details";
//         const displayError = error.errors[0].message;
//         console.log(displayError);
//         const err = {
//             status,
//             message,
//             displayError,
//         };
//         next(err);
//     }

// };

// module.exports=validate;

const { signup } = require("../validators/validation"); // Ensure correct path to schema

const validate = (req, res, next) => {
    try {
        // Validate request body using Zod
        const parsedBody = signup.parse(req.body);
        req.body = parsedBody; // Replace req.body with validated data
        next();
    } catch (error) {
        console.error("Validation Error:", error);

        // Ensure 'error.errors' exists before accessing
        const errors = error.errors?.map(err => err.message) || ["Invalid request data"];

        return res.status(400).json({
            status: 400,
            message: "Validation failed",
            errors: errors
        });
    }
};

module.exports = validate;
