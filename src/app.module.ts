import { Controller, Get, HttpCode, HttpStatus, Module } from '@nestjs/common';
import { getPackageJson } from 'helper-fns';

import { UsersModule } from '@src/modules/users/users.module';

@Controller()
class AppController {
  @Get()
  @HttpCode(HttpStatus.OK)
  getHello() {
    const packageJson = getPackageJson(`${process.cwd()}`);
    const APP_NAME = packageJson.name;
    const APP_VERSION = packageJson.version;

    return {
      message: `Welcome to ${APP_NAME} v${APP_VERSION}`,
    };
  }
}

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
