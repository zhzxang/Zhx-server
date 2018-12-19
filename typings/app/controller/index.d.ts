// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportUserRegisterWechat from '../../../app/controller/user/register/wechat';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    user: {
      register: {
        wechat: ExportUserRegisterWechat;
      }
    }
  }
}
