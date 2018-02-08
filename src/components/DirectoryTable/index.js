import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import { connect } from 'react-redux';

import DirectoryItem from '../DirectoryItem';

import FolderIcon from '../../icons/folder';
import FileIcon from '../../icons/file';

const DirectoryTable = ({ list, id }) => (
  <table className="table-layout">
    <tbody>
      {
        id !== 'master' && <DirectoryItem Icon={FolderIcon} name=".." />
      }
      {
        list.map((element) =>
          <DirectoryItem
            Icon={element.type === 'tree' ? FolderIcon : FileIcon}
            name={element.name}
            clickeable={element.type === 'tree'}
            id={element.oid}
            fatherId={id}
            key={element.name} />
        )
      }
    </tbody>
  </table>
);

DirectoryTable.propTypes = {
  list: PropTypes.array,
  id: PropTypes.string
}

const mapStateToProps = ({ directory: { list, id } }) => ({ list, id })

export default connect(mapStateToProps)(DirectoryTable);