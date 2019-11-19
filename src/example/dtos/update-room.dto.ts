import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger'

export class UpdateRoomDto {
  @ApiModelProperty()
  name: string
  @ApiModelPropertyOptional()
  description: string
  @ApiModelProperty()
  seats: number
  @ApiModelPropertyOptional()
  capacity: number
  updatedOn: number
}
