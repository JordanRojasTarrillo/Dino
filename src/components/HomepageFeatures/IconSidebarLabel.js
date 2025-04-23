import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconSidebarLabel = ({ icon, label }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
    <FontAwesomeIcon icon={icon} />
    {label}
  </span>
);

export default IconSidebarLabel;
