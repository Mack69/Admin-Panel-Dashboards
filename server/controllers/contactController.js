const contact = require("../models/contactModels");

const contactForm = async (req,res) => {
    try {
          const response = req.body;
          await contact.create(response);
          return res.status(200).json({message : "Message send Successfully"});
    } catch (error) {
        return res.status(500).json({message : "Message not Delivered"});
        
    }
};

module.exports = {contactForm};
