const dotenv = require('dotenv').config()

module.exports = {
    auth_api_url: process.env.AUTH_MS,
    inmuebles_api_url: process.env.INMUEBLES_MS,
    likes_api_url: process.env.LIKES_MS,
};