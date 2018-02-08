import user from '../user';
import actions from '../../actions';

it('should return the initial state', () => {
  expect(user(undefined, {})).toMatchSnapshot()
})

it('should handle UPDATE_USER', () => {
  expect(user(undefined, actions.updateUser({
    newName: 'Jhon Doe',
    newUser: 'JDoe',
    newAvatar: 'image.jpg',
    newBio: 'hi!',
    newCompany: 'company',
    newLocation: 'London, Spain',
    newMail: 'gmail@jhondoe.com',
    newWebsite: 'com.ar.jhon'
  }))).toMatchSnapshot()
})