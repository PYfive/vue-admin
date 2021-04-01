import request from "../utils/request";

export function userInfo(data) {
  return request({
    url: '/v1/user/info',
    method: 'get',
    data
  })
}
