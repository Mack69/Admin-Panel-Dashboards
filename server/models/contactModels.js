const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    username : {
        type:String,
        require:true,
    },
    email : {
        type:String,
        require:true,
    },
    message : {
        type:String,
        require:true,
    },
});

// Create a collection
const contact = new mongoose.model("contact_details",contactSchema);
module.exports = contact;