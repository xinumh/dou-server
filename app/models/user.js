import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
})

UserSchema.virtual('userInfo').get(function() {
  return {
    username: this.username
  }
})

module.exports = mongoose.model('User', UserSchema)