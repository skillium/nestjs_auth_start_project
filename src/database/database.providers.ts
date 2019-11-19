import * as mongoose from 'mongoose'
import { DB_CONNECTION } from '../constants'

export const databaseProviders = [
  {
    provide: DB_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URI}/${process.env.DB_NAME}?${process.env.DB_CONFIG}`,
        {
          useCreateIndex: true,
          useUnifiedTopology: true,
          useNewUrlParser: true,
          useFindAndModify: false,
        },
      ),
  },
]
