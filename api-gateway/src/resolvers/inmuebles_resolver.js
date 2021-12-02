const { ApolloError } = require('apollo-server');

const inmuebleResolver = {
    Query: {
        inmuebleById: async (_, { inmuebleId }, { dataSources, userIdToken }) => {
           
            return dataSources.inmueblesApi.getInmueble(inmuebleId)
        },
        allInmuebles: async (_, { order, sort, offset, limit }, { dataSources }) => {
            return dataSources.inmueblesApi.getAllInmuebles(order, sort, offset, limit)
        },
        serachInmuebles: async (_, { q, order, sort, offset, limit }, { dataSources }) => {
            return dataSources.inmueblesApi.serachInmuebles(q, order, sort, offset, limit)
        },
    },
    Mutation: {}
   /*agregar este codigo en cada funcion de mutation. completar el data source de inmuebles
   
   async (_, { inmuebleId }, { dataSources, userIdToken }) => 

    if(!userIdToken) throw new ApolloError("NO AUTORIZADO FALTA EL TOKEN" ,401)
			
    const user = await dataSources.authAPI.getUser(userIdToken)
    
    if(!user.is_staff) {
        throw new ApolloError("NO AUTORIZADO" ,401)
    }*/

}

module.exports = inmuebleResolver