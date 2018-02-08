import directory from '../directory';
import actions from '../../actions';

it('should return the initial state', () => {
  expect(directory(undefined, {})).toMatchSnapshot()
})

it('should handle UPDATE_DIRECTORY', () => {
  expect(directory(undefined, actions.updateDirectory({
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
  }))).toMatchSnapshot()
})