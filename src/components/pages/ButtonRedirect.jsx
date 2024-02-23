// ButtonRedirect.js

import React from 'react';

const ButtonRedirect = ({ destination, children }) => {
  const handleRedirect = () => {
    window.location.href = destination;
  };

  return (
    <button style={{ width: '150px'}} class="btn btn-color-1" onClick={handleRedirect}>
       {children}
    </button>
  );
};

export default ButtonRedirect;
