/*DATA SOURCE: se debe crear un data source por cada microservicio.

los data source permiten conectar el api gateway con los microservicios mediante la ejecucion de peticiones http de esta forma el api gateway consume los servicios (endpoints) de cada microservicio. para ejecutar la peticiones http los data source no usan ni axios() ni fetch() sino que usan su propio metodo */

const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class AuthAPI extends RESTDataSource {
    constructor() {
        super();//este es el constructor de la clase padre RESTDataSource. super() sin parametros permite inicializar a la clase hijo AuthAPI con los atributos de la clase padre RESTDataSource
        this.baseURL = serverConfig.auth_api_url;//this.baseURL es uno de los atributos heredados de la clase padre RESTDataSource
    }

    //se crea una funcion por cada endpoint del microservicio auth_api_url = https://grupo4-authms.herokuapp.com.
    //estas funciones reciben parametros enviados desde el frontend
    async createUser(user) {//el parametro user es el body de la peticion post la cual crea un usuario
        user = new Object(JSON.parse(JSON.stringify(user)));//convierte el body user en formato json
        return await this.post(`/user/`, user);//ejecuta una peticion post al endpoint /user/ enviando el body user
    }
    async getUser(userId) {//el parametro userId es una parte del endpoint, en este caso userId es el nuemero que identifica a un usuario

        return await this.get(`/user/${userId}/`);
    }
    async authRequest(credentials) {//el parametro credentials es el body de la peticion post para iniciar sesion
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/login/`, credentials);
    }
    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify({ refresh: token })));
        return await this.post(`/refresh/`, token);
    }
}
module.exports = AuthAPI;