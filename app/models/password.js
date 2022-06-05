import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  hash: { type: String, required: true }
})

module.exports = mongoose.model('password', UserSchema)