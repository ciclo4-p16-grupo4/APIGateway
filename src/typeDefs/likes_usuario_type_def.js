const { gql } = require('apollo-server');

const likesUserTypeDefs = gql`
   type likeuser {
      id: String!
      user_id: Int!
      inmueble_id: Int!
      creado: String!
   }

   input likeuserInput {
      user_id: Int!
      inmueble_id: Int!        
   }
   
   extend type Query {
      likeByUser(user_id: Int!): [likeuser]
      likesByInmueble(inmueble_id: Int!): [likeuser]
      likesAll: [likeuser]
   }

   extend type Mutation {
      createLike(like: likeuserInput!): likeuser
      deleteLike(likeId: Int!): String!
   }
`;
module.exports = likesUserTypeDefs;