import { User, UserProps } from './../models/User';
import { View, EventsMap } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): EventsMap {
    return {
      'click:.user-form__age-button': this.onAgeButtonClick,
      'click:.user-form__name-button': this.onNameButtonClick,
      'click:.user-form__user-button': this.onSaveButtonClick,
    };
  }

  onNameButtonClick = (): void => {
    const input = this.parent.querySelector('.user-form__name-input');

    if (input) {
      this.model.set({ name: (<HTMLInputElement>input).value });
    }
  };

  onAgeButtonClick = (): void => {
    this.model.setRandomAge();
    this.render();
  };

  onSaveButtonClick = (): void => {
    this.model.save();
  };

  template(): string {
    return `
      <div>
       
        <input placeholder="${this.model.get('name')}" class="user-form__name-input"/>
        <button type="button" class="user-form__age-button">Set random age</button>
        <button type="button" class="user-form__name-button">Save name</button>
        <button type="button" class="user-form__user-button">Save user</button>
      </div>
    `;
  }
}
