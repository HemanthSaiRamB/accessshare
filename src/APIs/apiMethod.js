import API from './api.js'

export function postMethod(slug, route, body) {
    return new Promise((resolve, reject) => {
        API.post(slug + route, body).then(apiResp => {
            if (apiResp.data.success) {
                resolve(apiResp.data)
            } else {
                throw {
                    data: { message: apiResp.message }
                }
            }
        }).catch(err => {
            reject({ message:err.data?err.data.message:err.message })
        })
    })
}
