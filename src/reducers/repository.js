import { handleActions } from 'redux-actions';

const defaultState = {
  name: '',
  owner: '',
  description: '',
  homepage: '',
  id: '',
  starred: false,
  watching: false,
};

export default handleActions({
  UPDATE_REPOSITORY: (state, { payload: { newName, newOwner, newDescription, newHomepage, newId, newStarred, newWatching } }) => {
    return {
      name: newName,
      owner: newOwner,
      description: newDescription,
      homepage: newHomepage,
      id: newId,
      starred: newStarred,
      watching: newWatching
    }
  },
  STAR_CHANGE: (state, { payload: { newStarred } }) => {
    return {
      ...state,
      starred: newStarred
    }
  },
  WATCH_CHANGE: (state, { payload: { newWatching } }) => {
    return {
      ...state,
      watching: newWatching
    }
  }
}, defaultState);