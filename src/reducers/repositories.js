import { handleActions } from 'redux-actions';

const defaultState = {
  list: [],
  hasNextPage: false,
  endCursor: null
};

export default handleActions({
  UPDATE_REPOSITORIES: (state, { payload: { newList, newHasNextPage, newEndCursor } }) => {
    return {
      list: newList,
      hasNextPage: newHasNextPage,
      endCursor: newEndCursor
    }
  }
}, defaultState);