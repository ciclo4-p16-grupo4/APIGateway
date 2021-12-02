/*API GATEWAY CONTEXT: Los context son útiles cuando se quiere añadir o revisar la información que contiene una petición. Algunos usos 
comunes son la autenticación, donde un context revisa si una petición está autorizada para ejecutarse o no.  

en este caso el archivo authentication.js representa el context del api gateway. el context es una funcion que realiza un preprocesamiento a las peticiones http que recibe el api gateway, dicha funcion agrega o resta información a la petición según sea el caso. un Context se puede ver como una función que permite brindarle un contexto adicional a las peticiones.

en este caso la función tomará la petición entrante y revisará si esta tiene un token asociado en sus headers o no, en caso de tenerlo realizará una petición al microservicio auth_ms para corroborar la validez del token. Las peticiones de los endpoints que no necesiten
verificación simplemente omitirán este proceso por ejemplo  el endpoint de registro y refresh no necesitan verificarse.*/


const { ApolloError } = require('apollo-server');
const serverConfig = require('../server');//se importa el archivo server.js y las url creadas alli se asignan a la variable serverConfig
const fetch = require('node-fetch');//se importa el paquete node-fetch para poder usar el metodo fetch(). las versiones modernas de js por defecto ya vienen con el metodo fetch() pero hay navegadores que todavia usan versiones antiguas de js que no vienen con el metodo fetch() por eso es mejor importarlo 

const authentication = async ({ req }) => {//el parametro req con tiene la informacion de la peticion http, osea, tipo de peticion, url, body y header
    const token = req.headers.authorization || '';//del header enviado en la peticion obtener la clave authorization ya que esta contiene el access token

    if (token == '')//si la clave authorization no contiene un access token
        return { userIdToken: null }
    else {//si la clave authorization si contiene un access token entonces verificarlo

        try {//para verificar el access token se ejecuta una peticion post al endpoint /verifyToken/. para ejecutar la peticion lo primero que se hace es declarar los datos que se enviaran en la peticion post, osea, tipo de metodo http, headers, body y url. dentro del body se envia el access token
             
            let requestOptions = {
                method: 'POST', 
                headers: { "Content-Type": "application/json" },//indica que el formato de los datos enviados en la peticion sera json        
                body: JSON.stringify({ token }),//el metodo JSON.stringify() convierte el valor de un objeto en formato json
                redirect: 'follow'
            };

        //se ejecuta la peticion post usando el metodo fetch() a dicho metodo se le pasa como parametro la clave requestOptions la cual contiene los datos de la peticion, tambien se pasa como parametro la url. una vez llegue la peticion al endpoint /verifyToken/ el access token se pasa como parametro a la vista de dicho endpoint para verificarlo. la respuesta del microservicio se almacena en response. recordar que el endpoint es //https://grupo4-authms.herokuapp.com/verifyToken/ que en este caso esta representado por {serverConfig.auth_api_url}/verifyToken/
            let response = await fetch(`${serverConfig.auth_api_url}/verifyToken/`,requestOptions)//${} es el equivalente en python a f"{}", osea, permite dar formato y concatenar una variable

            //si el codigo de respuesta del servidor no es 200, entonces, mostrar un error con el mensaje `SESION INACTIVA' y el codigo 401
            if (response.status != 200) {
                console.log(response)
                throw new ApolloError(`SESION INACTIVA - ${401}` + response.status, 401)
            }
//si la respuesta del servidor es 200, entonces, tomar el dato UserId que viene en el body de la respuesta y convertirlo en json con el metodo json(). despues asignar UserId a la clave userIdToken. el valor UserId fue creado en el microservicio auth en la vista VerifyTokenView
            return { userIdToken: (await response.json()).UserId };
        }
        catch (error) {
            throw new ApolloError(`TOKEN ERROR: ${500}: ${error}`, 500);
        }

    }
}
module.exports = authentication;//se asigna la funcion authentication al atributo module.exports para poder importar la funcion desde otros archivos
