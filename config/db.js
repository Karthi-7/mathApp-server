const mongoose=require("mongoose");
require ("dotenv").config()
mongoose.set('strictQuery', true);
main().catch(err => console.log(err));

async function main() {
  console.log("waiting for mongodb connection")
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("connection successfull")
  
 
}

module.exports={
  main
}