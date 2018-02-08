import configureStore from 'redux-mock-store';
import act from '../../actions';

const middlewares = [];
const mockStore = configureStore(middlewares);

it('should dispatch action to update repository', () => {

  const initialState = {};
  const store = mockStore(initialState);

  store.dispatch(act.updateRepository({
    newName: 'Jhon-Doe-Repo',
    newOwner: 'JDoe',
    newDescription: 'hi!',
    newHomepage: 'com.ar.jhon',
    newId: 'asdaksdlksd==',
    newStarred: false
  }));

  const actions = store.getActions();
  expect(actions).toMatchSnapshot();
});

it('should dispatch action to change starred state', () => {

  const initialState = {};
  const store = mockStore(initialState);

  store.dispatch(act.starChange({
    newStarred: false
  }));

  const actions = store.getActions();
  expect(actions).toMatchSnapshot();
});