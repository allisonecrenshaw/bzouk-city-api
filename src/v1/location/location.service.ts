import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { LocationEntity } from './location.entity.js';

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

  async create(): Promise<String> {
    return 'This will create a new location.';
  }
}
