
const mongoose = require('mongoose')

const url = 'mongodb://root:root@127.0.0.1:27017'
const connection = mongoose.createConnection(url,
  {
    useNewUrlParser: true,
  }, err => {
    if (err) {
      console.log('出错---------->', err)
    } else {
      console.log('链接成功')
    }
  }
)

module.exports = connection
