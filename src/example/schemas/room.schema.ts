import * as mongoose from 'mongoose'

const { Schema } = mongoose

export const RoomSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio.'],
  },
  description: String,
  seats: {
    type: Number,
    required: [true, 'El número de asientos es obligatorio.'],
  },
  capacity: Number,
  createdOn: Number,
  updatedOn: Number,
})
