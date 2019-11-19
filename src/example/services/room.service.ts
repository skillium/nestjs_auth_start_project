import { Injectable, Inject } from '@nestjs/common'
import { ROOM_MODEL } from '../constants'
import { Model } from 'mongoose'
import { IRoom } from '../interfaces/room.interface'
import { RoomDto, CreateRoomDto, UpdateRoomDto } from '../dtos'

@Injectable()
export class RoomsService {
  constructor(@Inject(ROOM_MODEL) private readonly roomModel: Model<IRoom>) {}

  async getAsync(): Promise<RoomDto[]> {
    return await this.roomModel.find()
  }

  async getByIdAsync(id: string): Promise<RoomDto> {
    return await this.roomModel.findById(id)
  }

  async createAsync(payload: CreateRoomDto): Promise<RoomDto> {
    const room = new this.roomModel(payload)
    room.createdOn = Date.now()

    return await room.save()
  }

  async updateAsync(id: string, payload: UpdateRoomDto): Promise<RoomDto> {
    payload.updatedOn = Date.now()

    const room = await this.getByIdAsync(id)

    if (!room) {
      return null
    }

    return this.roomModel.findByIdAndUpdate(
      id,
      { $set: { ...payload } },
      { new: true },
    )
  }

  async deleteAsync(id: string): Promise<RoomDto> {
    const room = await this.getByIdAsync(id)

    if (!room) {
      return null
    }

    return await this.roomModel.findByIdAndDelete(id)
  }
}
