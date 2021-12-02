const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class LikesAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.likes_api_url;
    }

    async createLike(like){
        like = new Object(JSON.parse(JSON.stringify(like)));
        return await this.post('/likes', like);
    }

    async getAllLikes(){
        return await this.get('/likes');
    }

    async getLikesByUser(userId){
        return await this.get(`/likes/user/${userId}`);
    }

    async getLikesByInmueble(inmuebleId){
        return await this.get(`/likes/inmueble/${inmuebleId}`);
    }

    async getLikesCountByInmueble(inmuebleId){
        return await this.get(`/likes/count/inmueble/${inmuebleId}`);
    }

    async deleteLike(likeId){
        return await this.delete(`/likes/${likeId}`);
    }
}
module.exports = LikesAPI;