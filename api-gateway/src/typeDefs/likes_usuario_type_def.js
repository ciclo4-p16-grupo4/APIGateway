const { gql } = require('apollo-server');

const likesUserTypeDefs = gql`

 input likesUserPost {
    userId: Int! 
    inmuebleId: Int!
 }

 extend type Mutation {
    likesCreate(userLike: likesUserPost): 
    likesDelete(userLikeDelete: likesUserPost ): 
 }

 extend type Query {
    inmueblesById(userId: Int!): 
    inmueblesSearch(search: Int!): [] corregir
    inmueblesAllView(userId: Int!):   corregir
 }
`;
module.exports = likesUserTypeDefs;