import faker from 'faker';

import { Mappable } from './interfaces/Mappable';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    const { company, address } = faker;

    this.name = company.companyName();
    this.catchPhrase = company.catchPhrase();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    };
  }

  getMarkerContent(): string {
    return `
      <div>
        <h1>Company name: ${this.name}</h1>
        <h3>Company catch phrase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}
