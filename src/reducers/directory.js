import { handleActions } from 'redux-actions';

const defaultState = {
  list: [],
  id: null,
  stackTrace: []
};

export default handleActions({
  UPDATE_DIRECTORY: (state, { payload: { newList, newId } }) => {
    return {
      ...state,
      list: newList.sort((a, b) => a.type !== 'tree'),
      id: newId,
    }
  },
  FORWARD_STACK: (state, { payload: { newStack } }) => {
    return {
      ...state,
      stackTrace: state.stackTrace.concat(newStack)
    }
  },
  BACKWARD_STACK: (state) => {
    return {
      ...state,
      stackTrace: state.stackTrace.slice(0, state.stackTrace.length - 1)
    }
  }
}, defaultState);