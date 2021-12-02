/*const { gql } = require('apollo-server');

const inmueblesTypeDefs = gql`

 type inmueblesResponse {
    id_inmueble: Int!
    titulo: String! 
    direccion: String!
    ciudad: String!
    poblacion: String!
    precio: Float!
    tipo: String!
    area: Int!
    habitaciones: Int!
    banos: Int!
    estrato: Int!
    contrato: String!
    descripcion: String!
    coordenadas: String!
    likes: Int!
 }

 input inmueblesBody {
    titulo: String! 
    direccion: String!
    ciudad: String!
    poblacion: String!
    precio: Float!
    tipo: String!
    area: Int!
    habitaciones: Int!
    banos: Int!
    estrato: Int!
    contrato: String!
    descripcion: String!
    coordenadas: String!
    likes: Int!
 }

 extend type Mutation {
    inmueblesCreate(adminInput1: inmueblesBody!): inmueblesResponse
    inmueblesUpdate(adminInput2: inmueblesBody!): inmueblesResponse
    inmueblesDelete(adminInput3: inmueblesBody!): inmueblesResponse
 }

 extend type Query {
 }
`;
module.exports = inmueblesTypeDefs;

//inmueblesById(inmuebleId: Int!): inmueblesResponse                    
//inmueblesSearch(search: search$): [inmueblesResponse] 
//inmueblesAllView(inmuebleId: $): [inmueblesResponse] 
*/

const { gql } = require('apollo-server');

const inmueblesTypeDef = gql`
	type inmueble {
		id: Int!
      	likes: Int
		titulo: String!
		direccion: String!
		ciudad: String!
		poblacion: String!
		tipo: String!
		precio: String!
		area: Int!
		habitaciones: Int!
		banos: Int!
		estrato: Int!
		contrato: String!
		descripcion: String!
		coordenadas: String!
		imagenes: [imagenes]!
	}
	
	type imagenes {
		id: Int
		url: String
	}

	type AllInmuebles {
		count: Int!
		results: [inmueble]!
	}

	input inputImagenes  {
		url: String!
	}

	input inmuebleInput {
      	likes: Int
		titulo: String!
		direccion: String!
		ciudad: String!
		poblacion: String!
		tipo: String!
		precio: String!
		area: Int!
		habitaciones: Int!
		banos: Int!
		estrato: Int!
		contrato: String!
		descripcion: String!
		coordenadas: String!
		imagenes: [inputImagenes]
	}

	extend type Query {
		inmuebleById(inmuebleId: Int!): inmueble
		allInmuebles(order: String, sort: String, offset: Int, limit: Int): AllInmuebles
		serachInmuebles(q: String!,order: String, sort: String, offset: Int, limit: Int): AllInmuebles
	}
`
module.exports = inmueblesTypeDef
