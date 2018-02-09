import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import cn from 'classnames';

import { connect } from 'react-redux';

import actions from '../../actions';

import { repositoryNextLayer, repositoryFirstLayer } from '../../utils/queries';
import client from '../../utils/graphQLClient';

const { updateDirectory, forwardStack, backwardStack } = actions;


function handleclick(id, updateDirectory, repoName, repoOwner, forwardStack, backwardStack, fatherId, back, stackTrace) {
  back ?
    stackTrace[stackTrace.length - 1] === 'master' ?
      client.request(repositoryFirstLayer(repoOwner, repoName))
        .then(
          data => {
            updateDirectory({
              newList: data.repository.object.entries,
              newId: stackTrace[stackTrace.length - 1]
            });
            backwardStack();
          }
        )
      :
      client.request(repositoryNextLayer(repoOwner, repoName, stackTrace[stackTrace.length - 1]))
        .then(
          data => {
            updateDirectory({
              newList: data.repository.object.entries,
              newId: stackTrace[stackTrace.length - 1]
            });
            backwardStack();
          }
        )
    :
    client.request(repositoryNextLayer(repoOwner, repoName, id))
      .then(
        data => {
          forwardStack({
            newStack: [fatherId]
          });
          updateDirectory({
            newList: data.repository.object.entries,
            newId: id
          });
        }
      );
}

const DirectoryItem = ({ Icon, name, clickeable, id, fatherId, updateDirectory, repoName, repoOwner, forwardStack, backwardStack, back, stackTrace }) => (
  <tr onClick={clickeable ? () => handleclick(id, updateDirectory, repoName, repoOwner, forwardStack, backwardStack, fatherId, back, stackTrace) : null}
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

const mapStateToProps = ({ repository: { name, owner }, directory: { stackTrace } }) => ({ repoName: name, repoOwner: owner, stackTrace })

export default connect(mapStateToProps, { updateDirectory, forwardStack, backwardStack })(DirectoryItem);