import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import { connect } from 'react-redux';

import DirectoryItem from '../DirectoryItem';

import FolderIcon from '../../icons/folder';
import FileIcon from '../../icons/file';

const DirectoryTable = ({ list, fatherId, id }) => (
  <table className="table-layout">
    <tbody>
      {
        list.map((element) =>
          <DirectoryItem
            Icon={element.type === 'tree' ? FolderIcon : FileIcon}
            name={element.name}
            clickeable={element.type === 'tree'}
            key={element.name} />
        )
      }
    </tbody>
  </table>
);

DirectoryTable.propTypes = {
  list: PropTypes.array,
  fatherId: PropTypes.string,
  id: PropTypes.string
}

const mapStateToProps = ({ directory: { list, fatherId, id } }) => ({ list, fatherId, id })

export default connect(mapStateToProps)(DirectoryTable);