import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app
  router.get('/', controller.home.index)

  // 用户模块
  router.post('/register/wechat', controller.user.register.wechat.create)
}
