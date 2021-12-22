import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const Error = ({ errorMessage }) => (
  <>
    <FontAwesomeIcon size="4x" color='#0C1142' icon={faExclamationTriangle} />
    <p className="ml-3">{errorMessage}</p>
  </>
);

export default Error;
