const User=require("../models/user");
const bcrypt=require('bcryptjs');
const jwt=require("jsonwebtoken")
const cookieParser = require('cookie-parser');
require("dotenv").config()
const {getUserByEmail}=require("../util/util")

//signup 
const signup=async(req,res)=>{
    try{
        //  const{email,password,username,role}=req.body;

        const newUser=new User(req.body);

        const response=await newUser.save()

        return res.json({

            message:" signup successfull,",
            statuse:true,
            code:200,
            data:response
            
        })

    }
    catch(err){
        console.log(err.message)
        return res.status(400).json({message:"something went wrong"})
    }
}

//signin

const signin=async(req,res)=>{
   //finding user by email
   const user = await getUserByEmail(req.body.email)
    
        if(!user){
            return res.send("Invalid User")
        }
        else{
    //verify password
           const passwordVerify= await bcrypt.compareSync(req.body.password,user.password);

            if(passwordVerify){
                //if password is valid create jwt token
                let token=jwt.sign({email:user.email,password:user.password},process.env.my_secret_key)
                return res.header('auth',token).json({
                    token:token,
                    userData:user
                });
            }

            else{
                return res.status(400).send("invalid password");
            }
        }
      
}

const isStudent=(next)=>{
    if(User.role == "student"){
        next()
    }
}


const logout=async(req,res)=>{
    res.clearCookie('nToken').send("logout successfull");
 
}

//valid user

const validUser=(req,res,next)=>{
    var token=req.header('auth');
    req.token=token;
    next()

}

const getData=(req,res)=>{
    try{
        jwt.verify(req.token,process.env.my_secret_key,async(err,data)=>{
            if(err){
                res.sendStatus(403)
            }else{

                const response=  await User.findAll()
                return res.send(response)
            }
        })
    

    }
    catch(err){
        return res.status(400).send("forbidden data");
    }
}

module.exports={
    signup,signin,logout,getData,validUser,isStudent
}