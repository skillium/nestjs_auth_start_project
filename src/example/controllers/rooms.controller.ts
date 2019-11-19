import {
  ApiBearerAuth,
  ApiUseTags,
  ApiProduces,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger'
import {
  UseGuards,
  Controller,
  Get,
  Param,
  Post,
  HttpCode,
  Body,
  Put,
  Delete,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { RoomsService } from '../services/room.service'
import { RoomDto, CreateRoomDto, UpdateRoomDto } from '../dtos'
import { FilterResult } from '../../filters'

@ApiBearerAuth()
@ApiUseTags('Room')
@UseGuards(AuthGuard())
@ApiProduces('application/json')
@ApiBadRequestResponse({ description: 'Bad Request', type: FilterResult })
@Controller('api/v1/rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get()
  @ApiOkResponse({ description: 'Ok', type: RoomDto })
  Get(): Promise<RoomDto[]> {
    return this.roomsService.getAsync()
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Ok', type: RoomDto })
  GetById(@Param('id') id: string): Promise<RoomDto> {
    return this.roomsService.getByIdAsync(id)
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({ description: 'Created', type: RoomDto })
  Create(@Body() payload: CreateRoomDto): Promise<RoomDto> {
    return this.roomsService.createAsync(payload)
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Ok', type: RoomDto })
  Update(
    @Param('id') id: string,
    @Body() payload: UpdateRoomDto,
  ): Promise<RoomDto> {
    return this.roomsService.updateAsync(id, payload)
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Ok', type: RoomDto })
  Delete(@Param('id') id: string): Promise<RoomDto> {
    return this.roomsService.deleteAsync(id)
  }
}
