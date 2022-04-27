const mongoose = require('mongoose')

async function connect () {
  await mongoose.connect('mongodb://root:root@127.0.0.1:27017/', { useNewUrlParser: true }, (err) => {
    if (err) {
      console.log('出错---------->', err)
    } else {
      console.log('链接成功')
    }
  })
}

async function close () {
  await mongoose.connection.close()
}


module.exports = {
  connect,
  close
}

