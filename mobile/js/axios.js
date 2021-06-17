import axios from 'axios';
import QS from 'qs';
import store from '@/store/index'  //引入store
import router from '@/router'  //引入router

//创建axios实例
const service = axios.create({

    baseURL: 'https://artexpress-app.artron.net/',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'IsWap': 2
    },
    timeout: 3000
})

// http request 拦截器
service.interceptors.request.use(
    config => {
        // const token = sessionStorage.getItem('token')
        // if (token) { 
        //     config.headers.authorization = token  
        // }


        return config
    },
    err => {
        return Promise.reject(err)
    })

// http response 拦截器
service.interceptors.response.use(
    response => {
        //拦截响应，做统一处理 
        if (response.data.code) {

        }
        return response
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
        return Promise.reject(error.response.status) // 返回接口返回的错误信息
    })

/** 
* get方法，对应get请求 
* @param {String} url [请求的url地址] 
* @param {Object} params [请求时携带的参数] 
*/
export function get(url, params) {
    return new Promise((resolve, reject) => {
        service.get(url, {
            params: params
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        service.post(url, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
// export default service

//创建axios实例
const request = axios.create({

    baseURL: 'https://artexpress.artron.net//',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
    },
    timeout: 3000
})

// http request 拦截器
request.interceptors.request.use(
    config => {
        // const token = sessionStorage.getItem('token')
        // if (token) { 
        //     config.headers.authorization = token  
        // }


        return config
    },
    err => {
        return Promise.reject(err)
    })

// http response 拦截器
request.interceptors.response.use(
    response => {
        //拦截响应，做统一处理 
        if (response.data.code) {

        }
        return response
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
        return Promise.reject(error.response.status) // 返回接口返回的错误信息
    })

/** 
* get方法，对应get请求 
* @param {String} url [请求的url地址] 
* @param {Object} params [请求时携带的参数] 
*/
export function get1(url, params) {
    return new Promise((resolve, reject) => {
        request.get(url, {
            params: params
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post1(url, params) {
    return new Promise((resolve, reject) => {
        request.post(url, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
// export default service