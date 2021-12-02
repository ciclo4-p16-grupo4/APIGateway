const authTypeDefs = require('./auth_type_def');
const inmueblesTypeDefs = require('./inmuebles_type_def');
//Se unen
const schemasArrays = [authTypeDefs, inmueblesTypeDefs];
//Se exportan
module.exports = schemasArrays;
