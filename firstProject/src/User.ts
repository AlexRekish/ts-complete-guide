import faker from 'faker';

import { Mappable } from './interfaces/Mappable';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    const { name, address } = faker;

    this.name = name.firstName();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    };
  }

  getMarkerContent(): string {
    return `User name: ${this.name}`;
  }
}
