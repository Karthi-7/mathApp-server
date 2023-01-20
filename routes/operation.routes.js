const controller=require("../controller/operation.controller")
const {isStudent}=require("../controller/auth.controller")


const Routes=(app)=>{
app.post('/YouTell_IDo/api/v1/operations',controller.calculate)
app.get('/YouTell_IDo/api/v1/getDatas/:userId',controller.getOperData)
}

module.exports=Routes