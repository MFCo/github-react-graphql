import repositories from '../repositories';
import actions from '../../actions';

it('should return the initial state', () => {
  expect(repositories(undefined, {})).toMatchSnapshot()
});

it('should handle UPDATE_REPOSITORIES', () => {
  expect(repositories(undefined,
    actions.addRepositories(
      {
        newList:
          [
            {
              "name": "PangRevenge",
              "description": "We should play",
              "forkCount": 0,
              "primaryLanguage": {
                "color": "#f1e05a",
                "name": "JavaScript"
              },
              "homepageUrl": null
            },
            {
              "name": "PangRevenge",
              "description": "Hahaha",
              "forkCount": 0,
              "primaryLanguage": {
                "color": "#f1e05a",
                "name": "JavaScript"
              },
              "homepageUrl": null
            }
          ],
        newHasNextPage: false,
        newEndCursor: "Y3Vyc29yOnYyOpHOARWdng=="
      }))).toMatchSnapshot()
});

it('should handle ADD_REPOSITORIES', () => {
  expect(repositories(
    {
      list:
        [
          {
            "name": "PangRevenge",
            "description": "Pang pang revenge",
            "forkCount": 0,
            "primaryLanguage": {
              "color": "#f1e05a",
              "name": "JavaScript"
            },
            "homepageUrl": null
          },
          {
            "name": "PangRevenge",
            "description": "Pangolier is balanced ",
            "forkCount": 0,
            "primaryLanguage": {
              "color": "#f1e05a",
              "name": "JavaScript"
            },
            "homepageUrl": null
          },
          {
            "name": "PangRevenge",
            "description": "Yeah, i love dota2 ",
            "forkCount": 0,
            "primaryLanguage": {
              "color": "#f1e05a",
              "name": "JavaScript"
            },
            "homepageUrl": null
          }
        ],
      hasNextPage: true,
      endCursor: "Y3Vyc29yOnYyOpHOARWdng=="
    },
    actions.addRepositories(
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
      }))).toMatchSnapshot()
})