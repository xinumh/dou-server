const CourseModel = require('../model/course')

module.exports = {
  login: async(name, password) => {
    const course = new CourseModel({
      hour: 10,
      minute: 10
    })

    course.save(function(err, doc) {
      if (err) {
        console.log('save error:', err)
      }

      console.log('save success:', doc)
    })
    let data
    if (name == 'admin' && password == 123) {
      data = {
        status: 0,
        data: {
          title: '个人中心',
          content: '欢迎进入个人中心'
        }
      }
    } else {

      data = {
        status: -1,
        data: {
          title: '登录失败',
          content: '请输入正确的账号信息'
        }
      }
    }
    return data
  }
}