import { handleActions } from 'redux-actions';

const defaultState = {
  list: [],
  fatherId: [],
  id: null
};

export default handleActions({
  UPDATE_DIRECTORY: (state, { payload: { newList, newId } }) => {
    return {
      fatherId: state.fatherId,
      list: newList.sort((a, b) => a.type !== 'tree'),
      id: newId
    }
  }
}, defaultState);