// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportUserRegister from '../../../app/controller/user/register';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    user: {
      register: ExportUserRegister;
    }
  }
}
