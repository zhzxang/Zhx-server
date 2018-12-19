export interface WechatUser {
  openId: string
  nickName: string
  gender: number
  language: string
  country: string
  city: string
  province: string
  avatarUrl: string
  watermark: {
    timestamp: number
    appid: string
  }
}
