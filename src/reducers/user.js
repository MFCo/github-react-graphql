import { handleActions } from 'redux-actions';

const notProvided = (data) => `no ${data} provided`;

const defaultState = {
  avatar: '',
  name: notProvided('name'),
  user: notProvided('user'),
  bio: notProvided('bio'),
  company: notProvided('company'),
  location: notProvided('location'),
  mail: notProvided('e-mail'),
  website: notProvided('website')
};

export default handleActions({
  UPDATE_USER: (state, { payload: { newAvatar, newName, newUser, newBio, newCompany, newLocation, newMail, newWebsite } }) => {
    return {
      avatar: newAvatar,
      name: newName,
      user: newUser,
      bio: newBio,
      company: newCompany,
      location: newLocation,
      mail: newMail,
      website: newWebsite
    }
  }
}, defaultState);