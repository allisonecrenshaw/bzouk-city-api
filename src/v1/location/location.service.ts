import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationService {

  find(id: String) {
    console.log(id);
    return 'This will (eventually) return a location by id.';
  }
}
