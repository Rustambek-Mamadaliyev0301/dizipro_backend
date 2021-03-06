const {verify, sign} = require('jsonwebtoken');

module.exports.createToken = function createToken(data){
    return sign(data, process.env.SECRET_WORD,{
        expiresIn: "3d",
    });
}


module.exports.checkToken = function checkToken(token){
    try {
        return verify(token,process.env.SECRET_WORD);
    } catch (error) {
        return false;
        
    }
}