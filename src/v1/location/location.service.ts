import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocationEntity, NewLocationDTO } from './location.entity.js';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(LocationEntity)
    private locationRepository: Repository<LocationEntity>,
  ) {}

  async findOneById(id: string): Promise<LocationEntity> {
    try {
      const location = await this.locationRepository.findOne({ where: { id } });

      if (!location) {
        throw new NotFoundException(`Location with ID ${id} not found`);
      }

      return location;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error fetching location by ID: ${error.message}`);
      } else {
        console.error(`Unexpected error in findOneById: ${String(error)}`);
      }
      throw error;
    }
  }

  async findAll(): Promise<LocationEntity[]> {
    return await this.locationRepository.find();
  }

  async create(newLocationDTO: NewLocationDTO): Promise<LocationEntity> {
    const location = this.locationRepository.create(newLocationDTO);
    return this.locationRepository.save(location);
  }
}
