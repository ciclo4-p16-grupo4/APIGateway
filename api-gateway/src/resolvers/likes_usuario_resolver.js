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
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return await dataSources.likesAPI.likesAll();
            else
                return null;
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
                return await dataSources.likesAPI.deleteLike(like);
            else
                return null;
        }

    }
};

module.exports = likesUserResolver;