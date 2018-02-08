import { combineReducers } from 'redux';

import user from './user';
import repositories from './repositories';
import directory from './directory';

export default combineReducers({ user, repositories, directory });