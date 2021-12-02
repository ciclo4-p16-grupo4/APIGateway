const { gql } = require('apollo-server');
const likescountTypeDefs = gql`
    type likescount {
        inmuebleId: Int!
        likesCount: Int!
    }

    extend type Query {
        likecount(inmuebleId: Int!): likescount
        
    }    
`;
module.exports = likescountTypeDefs;