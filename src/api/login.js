import request from "../utils/request";

export function login(query) {
    return request({
        url: '/v1/login',
        method: 'post',
        params: query
    })
}