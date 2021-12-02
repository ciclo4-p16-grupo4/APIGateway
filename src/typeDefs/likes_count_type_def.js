const { gql } = require('apollo-server');
const likescountTypeDefs = gql`
    type likescount {
        inmueble_id: Int!
        likes_count: Int!
    }

    extend type Query {
        likecount(inmueble_id: Int!): likescount
        
    }    
`;
module.exports = likescountTypeDefs;