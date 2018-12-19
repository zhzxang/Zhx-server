import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'
import security from './security'
import { Config } from '../app/types/config'

const appConfig: Config = {
  mongodb: 'mongodb://127.0.0.1/zhzxang-server',
  apps: [
    // 惠助 微信小程序
    {
      name: 'HelpZeal',
      type: 'wxapp',
      secret: 'HELPZEAL_IS_VERY_GOOD',
      appid: 'wxa9bc052ce61341c4',
      appSecret: '34b946df64048cd38104c550a03cf32a',
      expire_time: 60 * 60 * 24 * 5 // 五天
    }
  ]
}

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1545034318453_6846'

  // add your egg config in here
  config.middleware = ['parseBody']

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  }

  config.mongoose = {
    url: appConfig.mongodb,
    options: {}
  }

  config.app = appConfig

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
    security
  }
}
