import { Application } from 'egg'
import { Document, Model } from 'mongoose'

interface WechatUserModel extends Document {}

export default (app: Application): Model<WechatUserModel> => {
  const schema = new app.mongoose.Schema({
    openId: String,
    user_id: String
  })
  return app.mongoose.model<WechatUserModel>('wechat', schema)
}
