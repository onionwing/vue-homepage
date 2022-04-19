import Mock from 'mockjs'
//webpack默认对外暴露的:图片  json数据格式
import video from './video.json'

//mock数据   第一个参数请求的地址    第二个:请求的数据
Mock.mock('/mock/video',{code:200,data:video})