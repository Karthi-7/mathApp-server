const User=require('../models/user');

const getUserByEmail=async(data)=>{
    const response=await User.findOne(
        
            { email: data}
        
    )
    return response
}

module.exports={
    getUserByEmail
}