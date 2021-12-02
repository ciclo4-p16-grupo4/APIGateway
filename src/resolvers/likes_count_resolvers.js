const likescountResolver = {
    Query:{
        likecount: async(_, {inmueble_id}, {dataSources, userIdToken}) => {
            //usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            //if (username == usernameToken)
                return await dataSources.likesAPI.getLikesCountByInmueble(inmueble_id);
            //else
              //  return null;
        },
    },
    Mutation:{

    }

};

module.exports = likescountResolver;