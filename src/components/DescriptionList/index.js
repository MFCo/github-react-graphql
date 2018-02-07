import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import CompanyLogo from '../../logos/comp';
import LocationLogo from '../../logos/location';
import MailLogo from '../../logos/mail';
import WebsiteLogo from '../../logos/website';

import './style.css';

const DescriptionList = ({ company, website, location, mail }) =>
  <ul className="description-list">
    {company && <li className="description-item">
      <span className="description-svg">
        <CompanyLogo />
      </span>
      <span className="description-text">
        {company}
      </span>
    </li>}
    {location && <li className="description-item">
      <span className="description-svg">
        <LocationLogo />
      </span>
      <span className="description-text">
        {location}
      </span>
    </li>}
    {mail && <li className="description-item">
      <span className="description-svg">
        <MailLogo />
      </span>
      <span className="description-text">
        {mail}
      </span>
    </li>}
    {website && <li className="description-item">
      <span className="description-svg">
        <WebsiteLogo />
      </span>
      <span className="description-text">
        {website}
      </span>
    </li>}
  </ul>

DescriptionList.propTypes = {
  company: PropTypes.string,
  website: PropTypes.string,
  location: PropTypes.string,
  mail: PropTypes.string
};

const mapStateToProps = ({ user: { company, website, location, mail } }) => ({ company, website, location, mail })

export default connect(mapStateToProps)(DescriptionList);