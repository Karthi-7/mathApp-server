const express=require("express")
const cors=require("cors")
const cookieParser = require('cookie-parser');

//import routes
const operationRoutes=require("./routes/operation.routes")
const authRoutes=require("./routes/auth.routes")
const {main}=require("../backend/config/db")


var bodyParser = require('body-parser')
const PORT=7000;

const app=express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

//routes
operationRoutes(app)
authRoutes(app)




app.listen(PORT,async()=>{
    await main()
    console.log(` server listening to the port ${PORT}`)
})
