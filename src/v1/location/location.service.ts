import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  LocationEntity,
  NewLocationDTO,
} from './location.entity.js';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(LocationEntity)
    private locationRepository: Repository<LocationEntity>,
  ) {}

  async findOneById(id: string): Promise<LocationEntity | null> {
    try {
      const location = await this.locationRepository.findOne({ where: { id } });
      return location;
    } catch (error) {
      return null;
    }
  }

  async findAll(): Promise<LocationEntity[]> {
    return await this.locationRepository.find();
  }

  async create(newLocationDTO: NewLocationDTO): Promise<LocationEntity> {
    const location = this.locationRepository.create(newLocationDTO);
    console.log(`Location: ${location}`);
    return this.locationRepository.save(location);
  }
}
