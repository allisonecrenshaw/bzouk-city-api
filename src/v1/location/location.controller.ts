import { Controller, Get, Param, Post } from '@nestjs/common';
import { LocationService } from './location.service.js';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get(':id')
  async find(@Param('id') id: string): Promise<String> {
    return this.locationService.find(id);
  }
}
