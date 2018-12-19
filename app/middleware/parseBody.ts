import { Context } from 'koa'

interface Message {
  [code: number]: string
}

const message: Message = {
  10001: '成功',
  20001: '失败'
}

export default () => {
  return async function parseBody(ctx: Context, next: () => Promise<any>) {
    ctx.body = (res: any, msgCode: number = 10001) => {
      const msg = message[msgCode]
      ctx.body = {
        success: msgCode < 20000,
        msg,
        result: res
      }
    }
    await next()
  }
}
