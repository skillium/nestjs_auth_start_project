import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';

export class FilterResult {
  @ApiModelProperty()
  message: string;
  @ApiModelProperty()
  timestamp: string;
  @ApiModelProperty()
  path: string;
  @ApiModelPropertyOptional()
  code?: number;
}
