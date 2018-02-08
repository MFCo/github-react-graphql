import { handleActions } from 'redux-actions';

const defaultState = {
  list: [],
  id: null
};

export default handleActions({
  UPDATE_DIRECTORY: (state, { payload: { newList, newId } }) => {
    return {
      list: newList.sort((a, b) => a.type !== 'tree'),
      id: newId
    }
  }
}, defaultState);