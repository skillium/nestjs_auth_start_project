import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { APP_FILTER } from '@nestjs/core'
import { MongoDbExceptionFilter } from '../filters'
import { DatabaseModule } from '../database/database.module'
import { RoomsController } from './controllers/rooms.controller'
import { roomProvider } from './providers'
import { RoomsService } from './services'

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    DatabaseModule,
  ],
  controllers: [RoomsController],
  providers: [
    RoomsService,
    ...roomProvider,
    {
      provide: APP_FILTER,
      useClass: MongoDbExceptionFilter,
    },
  ],
})
export class RoomModule {}
