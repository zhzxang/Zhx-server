import { Controller } from 'egg'
import { checkAndGetUser } from '../../../utils/wxapp-auth'
import { AppConfig } from '../../../types/config'
import { WechatUser } from '../../../types/user'

export default class UserController extends Controller {
  public async create() {
    const { ctx, app } = this
    const apps: AppConfig[] = app.config.app.apps
    const config = apps.find(({ name }) => name === 'HelpZeal')
    const userInfo: WechatUser = await checkAndGetUser(
      ctx.request.body,
      config!
    )
    const user = await app.model.User.create(userInfo)
    await app.model.Wechat.create({ openId: userInfo.openId, user_id: user._id })
    ctx.body(user)
  }
}
