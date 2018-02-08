import { handleActions } from 'redux-actions';

const defaultState = {
  name: '',
  owner: '',
  description: '',
  homepage: ''
};

export default handleActions({
  UPDATE_REPOSITORY: (state, { payload: { newName, newOwner, newDescription, newHomepage } }) => {
    return {
      name: newName,
      owner: newOwner,
      description: newDescription,
      homepage: newHomepage
    }
  }
}, defaultState);