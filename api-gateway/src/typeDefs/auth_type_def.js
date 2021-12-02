/*TYPEDEF: se debe crear un typedef por cada tabla (modelo) que tenga un microservicio. 

los typedef sirven para 2 cosas:

1- DEFINIR LOS TIPOS DATOS ENVIADOS ENTRE EL API GATEWAY Y EL FRONTEND: se definen los tipos de datos que el frontend envia en el body de una peticion para que asi el api gateway sepa que tipo de datos va a recibir desde el frontend. tambien se definen los tipos de datos de la respuesta de dicha peticion para que asi el api gateway sepa tipo de datos le va a enviar al frontend.

ademas del tipo de dato se debe indicar al api gateway si los datos son de entrada o salida. los datos que entran al api gateway es el body que recibe del frontend y los datos que salen del api gateway es la respuesta que envia al frontend. 

para implementar los typedef se debe crear un objeto indicando si almacenara datos de entrada o de salida mediante las palabras type o input, despues, se le asignan los datos correspondientes al objeto indicando su tipo, en apollo server los tipos son Int, Float, String, Boolean. 

tener en cuenta que los datos asignados al objeto input son los datos del body de la peticion y los datos asignados la objeto type son los datos de la respuesta de la peticion, osea, se debe crear un input por cada body y un type por cada respuesta 


TIPOS DE OBJETOS EN TYPEDEF:  

A- INPUT: son objetos que contienen los datos del body de la peticion. se debe crear un input por cada body de una peticion hecha al microservicio correspondiente

B- TYPE: son objetos que contienen los datos de la respuesta de la peticion. se debe crear un type por cada respuesta de una peticion hecha al microservicio correspondiente


2- DEFINIR LA OPERACION QUE SE EJECUTARA SOBRE LOS DATOS DE ENTRADA Y SALIDA: se debe definir el tipo de operacion que se ejecutara sobre los datos de entrada y salida que se definieron anteriormente, los tipos de operacion pueden ser mutation o query. para definir las operaciones se crean los objetos de tipo type llamados mutation y query. los datos asignados a los objetos mutation o query son definiciones de funciones, dichas funciones representan una peticion. en la definicion de la funcion se debe indicar el parametro que recibe y el valor que devuelve dicha funcion. 

si la operacion es mutation el parametro es el body de la peticion y valor de retorno es la respuesta de la peticion, osea, son los objetos de entrada y salida creados anteriormente. 

si la operacion es query el parametro es una parte del enpoint o un query params y valor de retorno es la respuesta de la peticion

tener en cuenta que a mutations y query se les debe asignar una funcion por cada endpoint del microservicio


TIPOS DE OPERACIONES EN TYPEDEF:

1- QUERY: en una operacion query se debe definir una funcion por cada endpoint get del microservicio

extend type Query {
    inmueblesById(userId: Int!): inmueblesGet -----------     si el api gateway envia varios registros de la db se pone [inmueblesGet]
          |              |                              |
nombre de la funcion  parametro que recibe            valor que devuelve la funcion                
osea, nombre de la    la funcion, dicho               dicho valor es la respuesta de
peticion              parametro es una parte de un    la peticion,osea, es el objeto
                      endpoint o tambien puede ser    type enviado desde el api gateway 
                      un query params, ambos son      hacia el frontend
                      enviados desde el frontend                       
         
}     

2- MUTATION: en una operacion mutation se debe definir una funcion por cada endpoint post, update o delete del microservicio o por cada vista del microservicio

extend type Mutation {   
    inmueblesCreate(adminInput1: inmueblesPost!): inmueblesGet
         |                        |                      |
nombre de la funcion     parametro que recibe         valor que devuelve la funcion                
osea, nombre de la       la funcion, dicho            dicho valor es la respuesta de
peticion                 parametro es el body de      la peticion,osea, es el objeto
                         la peticion, osea, es el     type enviado desde el api gateway        
                         input enviado desde el       hacia el frontend
                         frontend. si el frontend
                         envia solo un dato se
                         pone el tipo del dato,
                         osea, String, Int, etc                 
                         
}
               
SIMBOLO !: ! significa que el dato es obligatorio recibirlo o enviarlo */

const { gql } = require('apollo-server');

const authTypeDefs = gql`

 type Tokens {
    refresh: String! 
    access: String!
 }

 type Access {
    access: String!
 }

 input CredentialsInput {
    username: String!
    password: String!
 }

 input SignUpInput {
    username: String!
    password: String!
    name: String!
    email: String!
    cedula: Int!
    ciudad: String!
    is_staff: Boolean!
 }

 type UserDetail {
    id: Int!
    username: String!
    password: String!
    name: String!
    email: String!
    cedula: Int!
    ciudad: String!
    is_staff: Boolean!
 }

 type Mutation {
    signUpUser(userInput :SignUpInput): Tokens!
    logIn(credentials: CredentialsInput!): Tokens!
    refreshToken(refresh: String!): Access!
 }

 type Query {
    userDetailById(userId: Int!): UserDetail!     
 }                                                                                                     
`;
module.exports = authTypeDefs;