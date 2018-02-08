import configureStore from 'redux-mock-store';
import act from '../../actions';

const middlewares = [];
const mockStore = configureStore(middlewares);

it('should dispatch action to update user', () => {

  const initialState = {};
  const store = mockStore(initialState);

  store.dispatch(act.updateRepository({
    newName: 'Jhon-Doe-Repo',
    newOwner: 'JDoe',
    newDescription: 'hi!',
    newHomepage: 'com.ar.jhon'
  }));

  const actions = store.getActions();
  expect(actions).toMatchSnapshot();
});