import { UserShow } from './UserShow';
import { UserForm } from './UserForm';
import { View, RegionsMap } from './View';
import { User, UserProps } from './../models/User';

export class UserEdit extends View<User, UserProps> {
  regionsMap(): RegionsMap {
    return {
      userShow: '.user__show',
      userForm: '.user__form',
    };
  }

  onRender(): void {
    const userShow = new UserShow(this.regions.userShow, this.model);
    userShow.render();
    const userForm = new UserForm(this.regions.userForm, this.model);
    userForm.render();
  }

  template(): string {
    return `
      <div class="user__show"></div>
      <div class="user__form"></div>
    `;
  }
}
