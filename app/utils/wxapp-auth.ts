// import crypto from 'crypto'
import axios from 'axios'
import * as qs from 'qs'
// import jwt from 'jsonwebtoken'
// import { appid, expire_time, secret } from '../config'
import WXBizDataCrypt from './WXBizDataCrypt'
import { AppConfig } from '../types/config'

// export function generateToken(data) {
//   const exp = Date.now() + expire_time
//   return jwt.sign({ data, exp }, secret)
// }

export async function checkAndGetUser(
  clicentConfig: {
    code: string
    encryptedData: string
    iv: string
  },
  appConfig: AppConfig
) {
  const params = {
    appid: appConfig.appid,
    secret: appConfig.appSecret,
    js_code: clicentConfig.code,
    grant_type: 'authorization_code'
  }
  const { session_key } = await axios
    .get(`https://api.weixin.qq.com/sns/jscode2session?${qs.stringify(params)}`)
    .then(({ data }) => data)

  const decodeUser = new WXBizDataCrypt(appConfig.appid, session_key)
  return decodeUser.decryptData(clicentConfig.encryptedData, clicentConfig.iv)
}
