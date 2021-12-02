const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class InmuebleApi extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = serverConfig.inmuebles_api_url
    }

    async getInmueble(id) {
        return await this.get(`/inmuebles/${id}/`)
    }

    async getAllInmuebles(order, sort, offset, limit) {
        let queryParams = '?'

        if (order) queryParams += `orderBy=${order}`
        if (sort) queryParams += `&sort=${sort}`
        if (offset) queryParams += `&offset=${offset}`
        if (limit) queryParams += `&limit=${limit}`
        return await this.get(`/inmuebles/${queryParams}`)
    }

    async serachInmuebles(q, order, sort, offset, limit) {
        let queryParams = '?q=' + q

        if (order) queryParams += `&orderBy=${order}`
        if (sort) queryParams += `&sort=${sort}`
        if (offset) queryParams += `&offset=${offset}`
        if (limit) queryParams += `&limit=${limit}`
        return await this.get(`/inmuebles/search${queryParams}`)
    }
}

module.exports = InmuebleApi