import mockRequests from './mockRequest'

//send request  and return Promise Object
//获取搜索模块的数据 地址:/api/list  post  带参数
//params至少是一个空对象
export const reqGetLogoImage = ()=>mockRequests({url:'/video',method:'get'})