import { Injectable } from '@nestjs/common';

export interface AppInfo {
  name: string,
  version: string,
};

@Injectable()
export class AppService {
  getInfo(): AppInfo {
    return { name: 'services', version: '1.0.0' };
  }
}
