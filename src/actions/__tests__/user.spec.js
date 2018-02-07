import configureStore from 'redux-mock-store';
import act from '../../actions';

const middlewares = [];
const mockStore = configureStore(middlewares);

it('should dispatch action to update user', () => {

  const initialState = {};
  const store = mockStore(initialState);

  store.dispatch(act.updateUser({
    newName: 'Jhon Doe',
    newUser: 'JDoe',
    newAvatar: 'image.jpg',
    newBio: 'hi!',
    newCompany: 'company', 
    newLocation: 'London, Spain',
    newMail:'gmail@jhondoe.com',
    newWebsite: 'com.ar.jhon'
  }));

  const actions = store.getActions();
  expect(actions).toMatchSnapshot();
});