const { ApolloError } = require('apollo-server')

const likesUserResolver = {
    Query: {
        likesByInmueble: async (_, { inmueble_id }, { dataSources, userIdToken }) => {
            return await dataSources.likesAPI.getLikesByInmueble(inmueble_id);
        },

        likeByUser: async (_, {user_id}, {dataSources, userIdToken}) => {
            if (userIdToken == user_id)
                return await dataSources.likesAPI.getLikesByUser(user_id);
            else
                throw new ApolloError("NO AUTORIZADO", 401)
        },

        likesAll: async (_, {}, {dataSources, userIdToken}) => {
            if (!userIdToken) throw new ApolloError("NO AUTORIZADO INICIE SESIÓN", 401)

            const user = await dataSources.authAPI.getUser(userIdToken)

            if (!user.is_staff) {
                throw new ApolloError("NO AUTORIZADO", 401)
            }
           
            return await dataSources.likesAPI.getAllLikes();
        }
    },
    Mutation: {
        createLike: async (_, {like}, {dataSources, userIdToken}) => {
            if (userIdToken == like.user_id)
                return await dataSources.likesAPI.createLike(like);
            else
                throw new ApolloError("NO AUTORIZADO", 401)
            
        },

        deleteLike: async (_, {likeId}, {dataSources, userIdToken}) => {
            if (!userIdToken) throw new ApolloError("NO AUTORIZADO INICIE SESIÓN", 401)

            const user = await dataSources.authAPI.getUser(userIdToken)

            if (!user.is_staff) {
                throw new ApolloError("NO AUTORIZADO", 401)
            }

            return await dataSources.likesAPI.deleteLike(likeId);
        }

    }
};

module.exports = likesUserResolver;