import configureStore from 'redux-mock-store';
import act from '../../actions';

const middlewares = [];
const mockStore = configureStore(middlewares);

it('should dispatch action to update directory', () => {

  const initialState = {};
  const store = mockStore(initialState);

  store.dispatch(act.updateDirectory({
    newList:
      [
        {
          "name": ".babelrc",
          "type": "blob",
          "oid": "d42ea8be8b19750c64dc2a305cbd198739e9adbe"
        },
        {
          "name": ".dockerignore",
          "type": "blob",
          "oid": "c8f50f7cd317669d25aedba7415f8a1cbaadbab0"
        },
        {
          "name": ".eslintrc.js",
          "type": "blob",
          "oid": "29e7593c8ba8c3aedfcf2f78750e43ec428e367f"
        }
      ],
    newId: 'c8f50f7cd317669d25aedba7415f8a1cbaadbab0'
  }));

  const actions = store.getActions();
  expect(actions).toMatchSnapshot();
});

it('should dispatch action to forward on stack trace', () => {

  const initialState = {};
  const store = mockStore(initialState);

  store.dispatch(act.forwardStack({
    newStack: ['c8f50f7cd317669d25aedba7415f8a1cbaadbab0']
  }));

  const actions = store.getActions();
  expect(actions).toMatchSnapshot();
});

it('should dispatch action to backward on stack trace', () => {

  const initialState = {};
  const store = mockStore(initialState);

  store.dispatch(act.backwardStack());

  const actions = store.getActions();
  expect(actions).toMatchSnapshot();
});
