import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger'

export class CreateRoomDto {
  @ApiModelProperty()
  name: string
  @ApiModelPropertyOptional()
  description: string
  @ApiModelProperty()
  seats: number
  @ApiModelPropertyOptional()
  capacity: number
  createdOn: number
}
