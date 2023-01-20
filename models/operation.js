const mongoose=require('mongoose');

const operationSchema=new mongoose.Schema({
    input_1:{
        type:Number,
        required:true
    },
    input_2:{
        type:Number,
        required:true
    },
    operands:{
        type:String,
        required:true
    },
    output:{
        type:Number,
    },
    userId:{
        type:String,
        required:true
    }
},{
    timestamps:true
})


const operationModel=mongoose.model('Operation',operationSchema)

module.exports=operationModel;