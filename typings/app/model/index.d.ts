// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportUser from '../../../app/model/user';
import ExportWechat from '../../../app/model/wechat';

declare module 'egg' {
  interface IModel {
    User: ReturnType<typeof ExportUser>;
    Wechat: ReturnType<typeof ExportWechat>;
  }
}
