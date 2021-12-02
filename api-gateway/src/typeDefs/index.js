const authTypeDefs = require('./auth_type_def');
const inmueblesTypeDefs = require('./inmuebles_type_def');
const likescountTypeDefs = require('./likes_count_type_def');
const likesusuarioTypeDefs = rquiere('./likes_usuario_type_def');
//Se unen
const schemasArrays = [authTypeDefs, inmueblesTypeDefs, likescountTypeDefs, likesusuarioTypeDefs];
//Se exportan
module.exports = schemasArrays;
