import axios from 'axios';

import { API_URL } from './constants';
import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';
import { UserList } from './views/UserList';

axios.defaults.baseURL = API_URL;

const collection = new Collection<User, UserProps>('/users', (json: UserProps) =>
  User.buildUser(json)
);

const root = document.getElementById('root');

collection.on('change', () => {
  if (root) {
    const userList = new UserList(root, collection);
    userList.render();
  } else {
    throw new Error('Root element not found');
  }
});

collection.fetch();
