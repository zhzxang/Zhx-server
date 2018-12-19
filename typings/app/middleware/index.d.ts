// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportParseBody from '../../../app/middleware/parseBody';

declare module 'egg' {
  interface IMiddleware {
    parseBody: typeof ExportParseBody;
  }
}
