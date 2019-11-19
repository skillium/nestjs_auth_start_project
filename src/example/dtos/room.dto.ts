import { ApiModelProperty } from '@nestjs/swagger'

export class RoomDto {
  @ApiModelProperty()
  _id: string
  @ApiModelProperty()
  name: string
  @ApiModelProperty()
  description: string
  @ApiModelProperty()
  seats: number
  @ApiModelProperty()
  capacity: number
  @ApiModelProperty()
  createdOn: number
  @ApiModelProperty()
  updatedOn: number
}
