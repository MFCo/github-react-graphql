import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import actions from '../actions';

import Repository from '../components/Repository';

import { repositoryFirstLayer } from '../utils/queries';
import client from '../utils/graphQLClient';

const { updateDirectory } = actions;

function fetchRepository(props) {
  const [, user, repository] = props.location.pathname.split('/');
  client.request(repositoryFirstLayer(user, repository))
    .then(
      data => {
        props.updateDirectory({
          newList: data.repository.object.entries,
          newfatherId: null,
          newId: data.repository.id
        });
      }
    )
}

class ProfilePage extends React.Component {

  static propTypes = {
    updateUser: PropTypes.any,
    updateRepositories: PropTypes.any
  }

  componentWillReceiveProps(newProps) {
    fetchRepository(newProps);
  }

  componentDidMount() {
    fetchRepository(this.props);
  }

  render() {
    return <Repository />
  }
}

export default connect(undefined, { updateDirectory })(ProfilePage);