import repository from '../repository';
import actions from '../../actions';

it('should return the initial state', () => {
  expect(repository(undefined, {})).toMatchSnapshot()
})

it('should handle UPDATE_REPOSITORY', () => {
  expect(repository(undefined, actions.updateRepository({
    newName: 'Jhon-Doe-Repo',
    newOwner: 'JDoe',
    newDescription: 'hi!',
    newHomepage: 'com.ar.jhon',
    newId: 'asdaksdlksd==',
    newStarred: false
  }))).toMatchSnapshot()
})

it('should handle STAR_CHANGE', () => {
  expect(repository(undefined, actions.starChange({
    newStarred: false
  }))).toMatchSnapshot()
})