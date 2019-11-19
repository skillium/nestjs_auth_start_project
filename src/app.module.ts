import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'

import { AppController } from './app.controller'
import { AuthModule } from './auth/auth.module'
import { DatabaseModule } from './database/database.module'
import { RoomModule } from './example/room.module'

@Module({
  imports: [PassportModule, AuthModule, DatabaseModule, RoomModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
