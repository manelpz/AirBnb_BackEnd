


const verifyToken = require("../resolvers/verifyToken");

module.exports =  async(req,res,next) => {

    //next es u callback   le dice continua
    //next ejecut ael siguiente middle o el controaldor 
    //son un middleware
    //

    //req es el objeto 
    //response laformo en que respondemos enviamos de servidor al cliente 

    try {

        let {authorization} = req.headers //siempre se llama authizatratonporque esuna 
        //cabezera estsablecida

        let user =  await verifyToken(authorization)

        if(!user) return res.status(400).json({"message":"token is invalid"})

        //req  = reques e sun objeto que se pasao por todo 
        //req.user es etu sesion de usuario contodos lso campos
        req.user = user

        //next es para qaber que es un middleware
        next();

    }catch(e){

        let {message} = e
        return res.status(400).json({message})
    }
}