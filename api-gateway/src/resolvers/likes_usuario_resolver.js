const { ApolloError } = require('apollo-server')

const likesUserResolver = {
    Query: {
        likesByInmueble: async (_, { inmuebleId }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return await dataSources.likesAPI.likesByInmueble(inmuebleId);
            else
                return null;
        },

        likeByUser: async (_, {userId}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return await dataSources.likesAPI.likesByUser(userId);
            else
                return null; 
        },

        likesAll: async (_, {dataSources, userIdToken}) => {
            if (!userIdToken) throw new ApolloError("NO AUTORIZADO FALTA TOKEN", 401)
            const user = await dataSources.authAPI.getUser(userIdToken)
            
            if (!user.is_staff){
                throw new ApolloError("NO AUTORIZADO", 401)
            }
           
            return await dataSources.likesAPI.getAllLikes();
           
        },
    },
    Mutation: {
        createLike: async (_, {like}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return await dataSources.likesAPI.createLike(like);
            else
                return null;

        },

        deleteLike: async (_, {likeId}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return await dataSources.likesAPI.deleteLike(likeId);
            else
                return null;
        }

    }
};

module.exports = likesUserResolver;