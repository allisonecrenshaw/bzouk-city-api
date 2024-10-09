import { Controller, Get, Param, Post } from '@nestjs/common';
import { LocationService } from './location.service.js';
import { LocationEntity } from './location.entity.js';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get(':id')
  async getById(@Param('id') id: string): Promise<LocationEntity> {
    return this.locationService.findOneById(id);
  }
}
