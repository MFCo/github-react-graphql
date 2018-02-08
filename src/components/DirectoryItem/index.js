import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.css';

const DirectoryItem = ({ Icon, name, clickeable }) => (
  <tr className={cn('item-layout', { 'item-layout__clickeable': clickeable })}>
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
  clickeable: PropTypes.bool
}

export default DirectoryItem;