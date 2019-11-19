import { Connection } from 'mongoose'
import { RoomSchema } from '../schemas'
import { ROOM_MODEL } from '../constants'
import { DB_CONNECTION } from '../../constants'

export const roomProvider = [
  {
    provide: ROOM_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('Room', RoomSchema),
    inject: [DB_CONNECTION],
  },
]
