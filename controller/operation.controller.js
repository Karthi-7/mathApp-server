const Operation=require("../models/operation");
const User=require("../models/user")






const calculate=async(req,res)=>{
    const {input_1,input_2,operands,userId}=req.body;
  
          //main function logic
    const ans=(operation,number)=>{
        if(!operation){
            return number
        }
        else{
            return operation(number)
        }
    }

    //number zero to nine function
    const zero=(operation)=>{
        return ans(operation,0)
        
    }
    
    const one=(operation)=>{
        return ans(operation,1)
        
    }
    
    const two=(operation)=>{
        return ans(operation,2)
        
    }
    const three=(operation)=>{
        return ans(operation,3)
        
    }
    const four=(operation)=>{
        return ans(operation,4)
        
    }
    
    
    const five=(operation)=>{
        return ans(operation,5)
        
    }
    const six=(operation)=>{
        return ans(operation,6)
        
    }
    
    const seven=(operation)=>{
        return ans(operation,7)
        
    }
    const eight=(operation)=>{
        return ans(operation,8)
        
    }
    
    const nine=(operation)=>{
        return ans(operation,9)
        
    }

    //operations
    function plus(x) {
        return function(y) {
            return y + x;
        }
    }
    function minus(x) {
        return function(y) {
            return y - x;
        }
    }
    function times(x) {
        return function(y) {
            return y * x;
        }
    }
    function dividedBy(x) {
        return function(y) {
            return Math.floor(y / x);
        }
    }

    //destruturing the value 
  
    
    let result,value1,value2,operator;

     
     let obj={
        0:zero,
        1:one,
        2:two,
        3:three,
        4:four,
        5:five,
        6:six,
        7:seven,
        8:eight,
        9:nine
     };
     

     


    let arithmeic={
        "plus":plus,
        "minus":minus,
        "times":times,
        "dividedBy":dividedBy
    }


//iterate obj and finding outer function
    for (const key in obj) {
        if (input_1 == key) {
            console.log(key,"v1")
          value1=obj[key];      
        }
      }

//iterate obj and finding inner function   
      for (const key in obj) {
        if (input_2 == key) {
          value2=obj[key];
         
          
        }
      }


//iterate obj and finding operands function
    for (const key in arithmeic){
        if(operands === key){
           operator=arithmeic[key]
        }
    }

    //logic to calulate operations
     result=value1(operator(value2()))
     
    const newOperation=new Operation({
        input_1,
        input_2,
        operands,
        output:result,
        userId
    })

    const response=await newOperation.save()

        return res.json({
            message:"operation done successfully",
            code:201,
            status:true,
            data:response
        })

    }
 

const getOperData=async(req,res)=>{
   
    try{
        const response=await Operation.find({userId:req.params.userId})
        return res.send(response);

    }
    catch(err){
        return res.status(400).json({message:err})
       
    }
}
module.exports={
    calculate,getOperData
}