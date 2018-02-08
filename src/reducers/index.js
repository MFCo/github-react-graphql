import { combineReducers } from 'redux';

import user from './user';
import repository from './repository';

import repositories from './repositories';
import directory from './directory';

export default combineReducers({ user, repository, repositories, directory });