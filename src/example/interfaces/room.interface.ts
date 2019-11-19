import { Document } from 'mongoose'

export interface IRoom extends Document {
  name: string
  description: string
  seats: number
  capacity: number
  createdOn: number
  updatedOn: number
}
