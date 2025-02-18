import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EventEntity, NewEventDTO } from './event.entity.js';
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

  async createEventAndRecurrenceRule(
    newEventDTO: NewEventDTO,
  ): Promise<EventEntity> {
    if (newEventDTO.parentEventId !== null) {
      const parentEvent = await this.eventRepository.findOne({
        where: { id: newEventDTO.parentEventId },
      });
      if (!parentEvent) {
        throw new BadRequestException(
          `Parent event with ID "${newEventDTO.parentEventId}" does not exist.`,
        );
      }
      if (parentEvent.parentEventId !== null) {
        throw new BadRequestException(
          `Invalid parent event: Event with ID "${newEventDTO.parentEventId}" cannot be a parent event because it is a child event.`,
        );
      }
    }

    const newEvent = this.eventRepository.create(newEventDTO);

    // TODO create recurrence rule

    // TODO create recurrence details

    return newEvent;
  }
}
