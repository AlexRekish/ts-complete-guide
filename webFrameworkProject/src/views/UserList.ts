import { UserShow } from './UserShow';
import { CollectionView } from './CollectionView';
import { User, UserProps } from './../models/User';

export class UserList extends CollectionView<User, UserProps> {
  renderItem(itemParent: Element, model: User): void {
    const userShow = new UserShow(itemParent, model);
    userShow.render();
  }
}
