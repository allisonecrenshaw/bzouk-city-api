import { Controller, Get, Param } from '@nestjs/common';

@Controller('event')
export class EventController {
  @Get(':id')
  async getById(@Param('id') id: string): Promise<string | null> {
    return 'temporary placeholder.';
  }
}
