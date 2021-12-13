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
		source_mapas: String
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

	
	type createdInmueble {
		detail: String!
		data: inmueble!
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
		source_mapas: String!
		imagenes: [inputImagenes]
	}
	input updateInmuebleInput {
		likes: Int
		titulo: String
		direccion: String
		ciudad: String
		poblacion: String
		tipo: String
		precio: String
		area: Int
		habitaciones: Int
		banos: Int
		estrato: Int
		contrato: String
		descripcion: String
		coordenadas: String
		source_mapas: String
		imagenes: [inputImagenes]
	}

	extend type Query {
		inmuebleById(inmuebleId: Int!): inmueble
		allInmuebles(order: String, sort: String, offset: Int, limit: Int): AllInmuebles
		serachInmuebles(q: String!,order: String, sort: String, offset: Int, limit: Int): AllInmuebles
	}

	extend type Mutation {
		inmueblesCreate(inmueblesInput: inmuebleInput!): createdInmueble
		inmueblesUpdate(inmueblesinput: updateInmuebleInput!, inmuebleId: Int!): createdInmueble
		inmueblesDelete(inmuebleId: Int!): String
	}
`
module.exports = inmueblesTypeDef
