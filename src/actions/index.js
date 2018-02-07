import ACTIONS from './types';
import { createActions } from 'redux-actions';

export default createActions(...Object.keys(ACTIONS));