/*RESOLVERS: se debe crear un resolver por cada tabla (modelo) que tenga un microservicio.

los resolvers permiten procesar las operaciones mutation y query creadas en los typedef, osea, en typedef se definen las funciones de las operaciones query y mutation y en resolvers se implementa el codigo de dichas funciones
*/

const usersResolver = {
    //aqui se implementan las funciones definidas en la operacion query del typedef correspondiente
    Query: {
        //el parameteo _ indica que la funcion pertenece a un resolver, osea, _ es equivalente al self en python o al this en java
        userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.authAPI.getUser(userId)
            else
                return null
        },
    },
    //aqui se implementan las funciones definidas en la operacion mutation del typedef correspondiente
    Mutation: {
        signUpUser: async (_, { userInput }, { dataSources }) => {
            const authInput = {
                username: userInput.username,
                password: userInput.password,
                name: userInput.name,
                email: userInput.email,
                cedula: userInput.cedula,
                ciudad: userInput.ciudad,
                is_staff: userInput.is_staff      
            }
            return await dataSources.authAPI.createUser(authInput);
        },
        logIn: (_, { credentials }, { dataSources }) =>
    
    dataSources.authAPI.authRequest(credentials),
        refreshToken: (_, { refresh }, { dataSources }) =>
            dataSources.authAPI.refreshToken(refresh),
    }
};
module.exports = usersResolver;
