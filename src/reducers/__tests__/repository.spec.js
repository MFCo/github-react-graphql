import repository from '../repository';
import actions from '../../actions';

it('should return the initial state', () => {
  expect(repository(undefined, {})).toMatchSnapshot()
})

it('should handle UPDATE_USER', () => {
  expect(repository(undefined, actions.updateRepository({
    newName: 'Jhon-Doe-Repo',
    newOwner: 'JDoe',
    newDescription: 'hi!',
    newHomepage: 'com.ar.jhon'
  }))).toMatchSnapshot()
})