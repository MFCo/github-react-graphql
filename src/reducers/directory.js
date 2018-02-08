import { handleActions } from 'redux-actions';

const defaultState = {
  list: [],
  fatherId: null,
  id: null
};

export default handleActions({
  UPDATE_DIRECTORY: (state, { payload: { newList, newfatherId, newId } }) => {
    return {
      list: newList.sort((a, b) => a.type !== 'tree'),
      fatherId: `"${newfatherId}"`,
      id: `"${newId}"`
    }
  }
}, defaultState);