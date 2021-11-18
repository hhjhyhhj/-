//  专门用来去发送ajax请求
/*
  1.封装功能函数
    1.功能明确
    2.函数内部应该保留固定代码
    3.将动态的数据要抽取成形参，由使用者根据自身的情况动态的传入实参
    4.一个良好的功能函数应该设置形参默认值
  2.封装功能组件
    1.功能点明确
    2.组件内部保留静态代码
    3.将动态的数据抽取成props参数，由使用者根据自身的情况以标签属性的形式动态传入props数据
    4.一个良好的组件应该设置组件的必要性和数据类型
*/
import config from './config'
export default(url,data,method='GET')=>{
  // new promise 初始化promise实例的状态为pending
  return new Promise((resolve,reject)=>{
    wx.request({
      url:config.host +url,
      data,
      method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
          // success
          resolve(res.data)  //resolve==>修改promise的状态为成功的状态
      },
      fail: function(error) {
          // fail
          reject(error)//reject==>修改promise的状态为失败的状态
      },
  })
  })
}