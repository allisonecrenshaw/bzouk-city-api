import { Controller, Get, Param, Post } from '@nestjs/common';
import { LocationService } from './location.service.js';
import { LocationEntity } from './location.entity.js';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get(':id')
  async getById(@Param('id') id: string): Promise<LocationEntity | null> {
    return this.locationService.findOneById(id);
  }

  @Get()
  async findAll(): Promise<LocationEntity[]> {
    return await this.locationService.findAll();
  }

  @Post()
  async create(): Promise<String> {
    return await this.locationService.create();
  }
}
