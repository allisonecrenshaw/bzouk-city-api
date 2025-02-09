import { Controller, Get, Param, Post } from '@nestjs/common';
import { EventService } from './event.service.js';
import { EventEntity } from './event.entity.js';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get(':id')
  async getById(@Param('id') id: string): Promise<EventEntity | null> {
    return this.eventService.findOneById(id);
  }

  @Post()
  // Update return type here when service implementation is finished
  async create(): Promise<string> {
    return this.eventService.createEventAndRecurrenceRule();
  }
}
