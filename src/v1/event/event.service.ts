import { Injectable, NotFoundException } from '@nestjs/common';
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
    const validParent = await this.isParentValid(newEventDTO.parentEventId);
    if (validParent === false) {
      // TODO error handling here
    }

    const event = this.eventRepository.create(newEventDTO);

    // TODO create recurrence rule

    // TODO create recurrence details

    return event;
  }

  async isParentValid(eventId: string): Promise<boolean> {
    const event = await this.eventRepository.findOne({
      where: { id: eventId },
    });

    if (!event) {
      return false;
    }

    let eventHasParent = this.hasParent(event);

    // event's parent is not allowed to also have a parent
    if (eventHasParent) {
      return false;
    }

    return true;
  }

  hasParent(event: EventEntity): boolean {
    if (event.parentEventId !== null && event.parentEventId !== '') {
      return true;
    }

    return false;
  }
}
