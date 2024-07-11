import { Controller, Get, Post } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  create(): string {
    return this.locationService.create();
  }

  @Get()
  findAll(): string {
    return 'This action will return all locations.';
  }
}
