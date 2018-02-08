import { handleActions } from 'redux-actions';

const defaultState = {
  name: '',
  owner: '',
  description: '',
  homepage: '',
  id: '',
  starred: false
};

export default handleActions({
  UPDATE_REPOSITORY: (state, { payload: { newName, newOwner, newDescription, newHomepage, newId, newStarred } }) => {
    return {
      name: newName,
      owner: newOwner,
      description: newDescription,
      homepage: newHomepage,
      id: newId,
      starred: newStarred
    }
  },
  STAR_CHANGE: (state, { payload: { newStarred } }) => {
    return {
      ...state,
      starred: newStarred
    }
  }
}, defaultState);