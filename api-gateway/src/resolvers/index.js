const authResolver = require('./auth_resolver');
const inmuebleResolver = require('./inmuebles_resolver')

const lodash = require('lodash');

const resolvers = lodash.merge(authResolver, inmuebleResolver);

module.exports = resolvers;