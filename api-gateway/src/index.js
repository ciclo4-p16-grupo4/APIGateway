const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const AuthAPI = require('./dataSources/authAPI');
const authentication = require('./utils/authentications')
const InmuebleAPI = require('./dataSources/inmueblesAPI');
const LikesAPI = require('./dataSources/likesAPI');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        authAPI: new AuthAPI(),
        inmueblesAPI: new InmuebleAPI(),
        likesAPI: new LikesAPI()
    }),
    introspection: true,
    playground: true
});
server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
