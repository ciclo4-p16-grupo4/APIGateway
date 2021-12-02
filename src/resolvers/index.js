const authResolver = require('./auth_resolver');
const inmuebleResolver = require('./inmuebles_resolver');
const likescountResolver = require('./likes_count_resolvers');
const likesUserResolver = require('./likes_usuario_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(authResolver, inmuebleResolver, likescountResolver, likesUserResolver);

module.exports = resolvers;