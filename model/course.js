const mongoose = require('mongoose')

CourseSchema = new mongoose.Schema({
  hour: { type: Number, max: 24,min: 8 },
  minute: { type: Number, max: 59,min: 0 },
  time: {
    type: Number,
    get() {
      return this.get('hour') * 100 + this.get('minute')
    } 
  },
})

const CourseModel = mongoose.model('Course', CourseSchema)

module.exports = CourseModel