import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationService {
  create() {
    return 'This will (eventually) create a location.';
  }

  findAll() {
    return 'This will (eventually) return all locations.';
  }
}
