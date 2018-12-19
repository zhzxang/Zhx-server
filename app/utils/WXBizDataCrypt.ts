import * as crypto from 'crypto'

export default class WXBizDataCrypt {
  private appId: string
  private sessionKey: string
  constructor(appId: string, sessionKey: string) {
    this.appId = appId
    this.sessionKey = sessionKey
  }

  public decryptData(encryptedData: string, iv: string) {
    const sessionKey = new Buffer(this.sessionKey, 'base64')
    const encryp = new Buffer(encryptedData, 'base64')
    const newIv = new Buffer(iv, 'base64')
    let decoded: any
    try {
      // 解密
      const decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, newIv)
      // 设置自动 padding 为 true，删除填充补位
      decipher.setAutoPadding(true)
      decoded = decipher.update(encryp, 'binary', 'utf8')
      decoded += decipher.final('utf8')

      decoded = JSON.parse(decoded)
    } catch (err) {
      throw new Error('Illegal Buffer')
    }

    if (decoded.watermark.appid !== this.appId) {
      throw new Error('Illegal Buffer')
    }

    return decoded
  }
}
