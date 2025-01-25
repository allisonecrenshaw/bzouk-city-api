import { Controller, Get, Param } from '@nestjs/common';
import { EventService } from './event.service';
import { EventEntity } from './event.entity';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get(':id')
  // TODO Test w/ Postman
  async getById(@Param('id') id: string): Promise<EventEntity | null> {
    return this.eventService.findOneById(id);
  }
}
