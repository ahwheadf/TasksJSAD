import { Task } from './task.js';
import { User } from './user.js';

const user = new User(new Task('Писать код'));
user.do();