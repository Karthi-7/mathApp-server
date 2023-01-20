const controller=require("../controller/auth.controller")
const {validUser}=require("../controller/auth.controller")

const Routes=(app)=>{

    app.post('/YouTell_IDo/api/v1/signup',controller.signup);
    app.post('/YouTell_IDo/api/v1/signin',controller.signin);
    app.get('/YouTell_IDo/api/v1/logout',controller.logout)
    app.get('/YouTell_IDo/api/v1/datas',validUser,controller.getData)



}

module.exports=Routes