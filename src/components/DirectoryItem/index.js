import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import cn from 'classnames';

import { connect } from 'react-redux';

import actions from '../../actions';

import { repositoryNextLayer } from '../../utils/queries';
import client from '../../utils/graphQLClient';

const { updateDirectory } = actions;


function handleclick(id, updateDirectory, repoName, repoOwner) {
  client.request(repositoryNextLayer(repoOwner, repoName, id))
    .then(
      data => {
        updateDirectory({
          newList: data.repository.object.entries,
          newId: id
        });
      }
    );
}

const DirectoryItem = ({ Icon, name, clickeable, id, updateDirectory, repoName, repoOwner }) => (
  <tr onClick={clickeable ? () => handleclick(id, updateDirectory, repoName, repoOwner) : null}
    className={cn('item-layout', { 'item-layout__clickeable': clickeable })}>
    <td className="item--icon">
      <Icon />
    </td>
    <td>
      {name}
    </td>
  </tr>);

DirectoryItem.propTypes = {
  Icon: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  clickeable: PropTypes.bool,
  id: PropTypes.string,
  updateDirectory: PropTypes.func,
  repoName: PropTypes.string,
  repoOwner: PropTypes.string
}

const mapStateToProps = ({ repository: { name, owner } }) => ({ repoName: name, repoOwner: owner })

export default connect(mapStateToProps, { updateDirectory })(DirectoryItem);