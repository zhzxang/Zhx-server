type AppType = 'wxapp' | 'normal'

export interface Config {
  mongodb: string
  apps: AppConfig[]
}
export interface AppConfig {
  name: string,
  type: AppType,
  secret: string,
  appid: string,
  appSecret: string,
  expire_time?: number
}
