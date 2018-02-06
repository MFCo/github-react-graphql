import React from 'react';

import CompanyLogo from '../../logos/comp';
import LocationLogo from '../../logos/location';
import MailLogo from '../../logos/mail';
import WebsiteLogo from '../../logos/website';

import './style.css';

const DescriptionList = () =>
  <ul className="description-list">
    <li className="description-item">
      <span className="description-svg">
        <CompanyLogo />
      </span>
      <span className="description-text">
        @CompanyName
      </span>
    </li>
    <li className="description-item">
      <span className="description-svg">
        <LocationLogo />
      </span>
      <span className="description-text">
        Somewhere, Germany
      </span>
    </li>
    <li className="description-item">
      <span className="description-svg">
        <MailLogo />
      </span>
      <span className="description-text">
        username@gmail.com
      </span>
    </li>
    <li className="description-item">
      <span className="description-svg">
        <WebsiteLogo />
      </span>
      <span className="description-text">
        www.username.com
      </span>
    </li>
  </ul>

export default DescriptionList;