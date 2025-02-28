const errorHandling = require("../middlewares/errorHandling");
const User=require("../models/userModels");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("WELCOME TO MY SEVER FROM ROUTER !!!");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const {username, email , phone , password}= req.body;
    const userExist = await User.findOne({email});

    if (userExist){
      return res.status(400).json({ message:"Email already exists"});
    }

    //Password Protection using HASH
    const saltround=await bcrypt.genSalt(10);
    const hashPassword= await bcrypt.hash(password, saltround);

    const userCreated= await User.create({username , email , phone , password:hashPassword});
    res.status(201).json({ message: "Registration Successful", token : await userCreated.generateToken(), userId :userCreated._id.toString(),});

  } catch (error) {
    res.status(404).send({ Msg: "Page Not Found" });
  }
};




const login = async (req, res) => {
  try {
    const {email, password} = req.body;
    const userExist = await User.findOne({email});
    if(!userExist){
      const message="Invalid Credendials";
      return res.status(400).json({message:"Invalid Credential"});
    }

    // const passwordValid = await bcrypt.compare(password,userExist.password);
    const passwordValid = await userExist.comparePassword(password);

    if(passwordValid){
      res.status(201).json({ message: "Login Successful", token : await userExist.generateToken(), userId :userExist._id.toString(),});

    }
    else{
      res.status(401).json({message :"Invalid Input"});
    }

  } catch (error) {
    res.status(404).send({ Msg: "Login Page Not Found" });
  }
};

module.exports ={ home, register,login};
 