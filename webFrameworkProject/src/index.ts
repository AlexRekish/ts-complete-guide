import axios from 'axios';

import { API_URL } from './constants';
import { User } from './models/User';

axios.defaults.baseURL = API_URL;

const user = new User({ name: 'Murkey', age: 2 });

user.sync.fetch(1);
