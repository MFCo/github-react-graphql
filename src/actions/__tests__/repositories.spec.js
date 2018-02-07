import configureStore from 'redux-mock-store';
import act from '../../actions';

const middlewares = [];
const mockStore = configureStore(middlewares);

it('should dispatch action to add repositories', () => {

  const initialState = {};
  const store = mockStore(initialState);

  store.dispatch(act.updateRepositories(
    {
      newList:
        {
          0: {
            "name": "PangRevenge",
            "description": "Pang pang revenge",
            "forkCount": 0,
            "primaryLanguage": {
              "color": "#f1e05a",
              "name": "JavaScript"
            },
            "homepageUrl": null
          },
          1: {
            "name": "PangRevenge",
            "description": "Pangolier is balanced ",
            "forkCount": 0,
            "primaryLanguage": {
              "color": "#f1e05a",
              "name": "JavaScript"
            },
            "homepageUrl": null
          },
          2: {
            "name": "PangRevenge",
            "description": "Yeah, i love dota2 ",
            "forkCount": 0,
            "primaryLanguage": {
              "color": "#f1e05a",
              "name": "JavaScript"
            },
            "homepageUrl": null
          },
        },
      newHasNextPage: true,
      newEndCursor: "Y3Vyc29yOnYyOpHOARWdng=="
    }));
  const actions = store.getActions();
  expect(actions).toMatchSnapshot();
});

it('should dispatch action to add repositories', () => {

  const initialState = {
    list:
      {
        0: {
          "name": "PangRevenge",
          "description": "Pang pang revenge",
          "forkCount": 0,
          "primaryLanguage": {
            "color": "#f1e05a",
            "name": "JavaScript"
          },
          "homepageUrl": null
        },
        1: {
          "name": "PangRevenge",
          "description": "Pangolier is balanced ",
          "forkCount": 0,
          "primaryLanguage": {
            "color": "#f1e05a",
            "name": "JavaScript"
          },
          "homepageUrl": null
        },
        2: {
          "name": "PangRevenge",
          "description": "Yeah, i love dota2 ",
          "forkCount": 0,
          "primaryLanguage": {
            "color": "#f1e05a",
            "name": "JavaScript"
          },
          "homepageUrl": null
        }
      },
    hasNextPage: true,
    endCursor: "Y3Vyc29yOnYyOpHOARWdng=="
  };

  const store = mockStore(initialState);

  store.dispatch(act.addRepositories(
    {
      newList:
        {
          0: {
            "name": "PangRevenge",
            "description": "We should play",
            "forkCount": 0,
            "primaryLanguage": {
              "color": "#f1e05a",
              "name": "JavaScript"
            },
            "homepageUrl": null
          },
          1: {
            "name": "PangRevenge",
            "description": "Hahaha",
            "forkCount": 0,
            "primaryLanguage": {
              "color": "#f1e05a",
              "name": "JavaScript"
            },
            "homepageUrl": null
          }
        },
      newHasNextPage: false,
      newEndCursor: "Y3Vyc29yOnYyOpHOARWdng=="
    }));
  const actions = store.getActions();
  expect(actions).toMatchSnapshot();
});