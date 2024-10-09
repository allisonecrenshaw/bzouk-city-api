import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocationEntity } from './location.entity.js';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(LocationEntity)
    private locationRepository: Repository<LocationEntity>,
  ) {}

  async findOneById(id: string): Promise<LocationEntity> {
    const location = await this.locationRepository.findOne({ where: { id } });
    if (!location) {
      throw new NotFoundException(`Location with id ${id} not found.`);
    }
    return location;
  }
}
