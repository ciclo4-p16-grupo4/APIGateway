const authResolver = require('./auth_resolver');
const inmuebleResolver = require('./inmuebles_resolver');
const likescountResolver = require('./likes_count_resolvers');
const likesusuarioResolver = require('./likes_usuario_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(authResolver, inmuebleResolver, likescountResolver, likesusuarioResolver);

module.exports = resolvers;