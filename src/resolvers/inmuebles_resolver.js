const { ApolloError } = require('apollo-server');

const inmuebleResolver = {
    Query: {
        inmuebleById: async (_, { inmuebleId }, { dataSources }) => {
            return dataSources.inmueblesAPI.getInmueble(inmuebleId)
        },
        allInmuebles: async (_, { order, sort, offset, limit }, { dataSources }) => {
            return dataSources.inmueblesAPI.getAllInmuebles(order, sort, offset, limit)
        },
        serachInmuebles: async (_, { q, order, sort, offset, limit }, { dataSources }) => {
            return dataSources.inmueblesAPI.serachInmuebles(q, order, sort, offset, limit)
        },
    },
    Mutation: {
        inmueblesCreate: async (_, { inmueblesInput }, { dataSources, userIdToken }) => {

            if (!userIdToken) throw new ApolloError("NO AUTORIZADO INICIE SESIÓN", 401)

            const user = await dataSources.authAPI.getUser(userIdToken)

            if (!user.is_staff) {
                throw new ApolloError("NO AUTORIZADO", 401)
            }
            return await dataSources.inmueblesAPI.createInmueble(inmueblesInput);
        },
        
        inmueblesUpdate: async (_, { inmueblesinput,  inmuebleId }, { dataSources, userIdToken }) => {

            if (!userIdToken) throw new ApolloError("NO AUTORIZADO INICIE SESIÓN", 401)

            const user = await dataSources.authAPI.getUser(userIdToken)

            if (!user.is_staff) {
                throw new ApolloError("NO AUTORIZADO", 401)
            }
            return await dataSources.inmueblesAPI.updateInmueble(inmueblesinput, inmuebleId);
        },

        inmueblesDelete: async (_, { inmuebleId }, { dataSources, userIdToken }) => {

            if (!userIdToken) throw new ApolloError("NO AUTORIZADO INICIE SESIÓN", 401)

            const user = await dataSources.authAPI.getUser(userIdToken)

            if (!user.is_staff) {
                throw new ApolloError("NO AUTORIZADO", 401)
            }
            await dataSources.inmueblesAPI.deleteInmueble(inmuebleId);

            return "Deleted"
        }
    }
}

module.exports = inmuebleResolver