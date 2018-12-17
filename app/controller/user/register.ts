import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async wechat() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
