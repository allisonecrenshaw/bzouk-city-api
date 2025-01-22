import { Injectable, NotFoundException } from '@nestjs/common';
import { EventEntity } from './event.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventEntity)
    private eventRepository: Repository<EventEntity>,
  ) {}

  async findOneById(id: string): Promise<EventEntity> {
    try {
      const event = await this.eventRepository.findOne({ where: { id } });

      if (!event) {
        throw new NotFoundException(`Event with ID ${id} not found.`);
      }

      return event;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error found fetching event by ID: ${error.message}`);
      } else {
        console.error(`Unexpected error in findOneById: ${String(error)}`);
      }
      throw error;
    }
  }
}
