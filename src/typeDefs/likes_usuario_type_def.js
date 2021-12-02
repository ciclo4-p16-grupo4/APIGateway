const { gql } = require('apollo-server');

const likesUserTypeDefs = gql`
   type likeuser {
      id: String!
      userId: Int!
      inmuebleId: Int!
      creado: String!
   }
   
   input likeuserInput {
      userId: Int!
      inmuebleId: Int!        
   }

   extend type Query {
      likeByUser(userId: Int!): [likeuser]
      likesByInmueble(inmuebleId: Int!): [likeuser]
      likesAll: [likeuser]
   }

   extend type Mutation {
      createLike(like: likeuserInput!): likeuser
      deleteLike(likeId: Int!): likeuser
   }
`;
module.exports = likesUserTypeDefs;