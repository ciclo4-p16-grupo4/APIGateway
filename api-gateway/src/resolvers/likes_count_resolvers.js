const likescountResolver = {
    Query:{
        likecount: async(_, {inmuebleId}, {dataSources, userIdToken}) => {
            //usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            //if (username == usernameToken)
                return await dataSources.likesAPI.getLikesCountByInmueble(inmuebleId);
            //else
              //  return null;
        },
    },
    Mutation:{

    }

};

module.exports = likescountResolver;