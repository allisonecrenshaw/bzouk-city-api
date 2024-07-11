import { Controller, Get, Post } from '@nestjs/common';

@Controller('location')
export class LocationController {
  @Post()
  create(): string {
    return 'This action will create a new location.';
  }

  @Get()
  findAll(): string {
    return 'This action will return all locations.';
  }
}
