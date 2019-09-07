import { Attributes } from './Attributes';
import { Sync } from './Sync';
import { Eventing } from './Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  events: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync<UserProps>();
  attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
}
