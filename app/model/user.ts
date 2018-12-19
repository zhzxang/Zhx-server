import { Application } from 'egg'
import { Document, Model } from 'mongoose'

export interface User extends Document {}

export interface UserModel extends User {}

export default (app: Application): Model<UserModel> => {
  const userSchema = new app.mongoose.Schema({
    nickname: String,
    avatarUrl: String,
    city: String,
    province: String,
    country: String,

    created: {
      type: Date,
      default: Date.now,
    },
    updated: {
      type: Date,
      default: Date.now,
    },
  })
  userSchema.methods.parse = function parse() {
    const { nickname, _id } = this
    return {
      _id,
      nickname
    }
  }
  return app.mongoose.model<UserModel>('user', userSchema)
}
