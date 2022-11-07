import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

function ImageIcon(props) {
  const { imag, linkPaht } = props;
  return (
    <Navbar.Brand href={ linkPaht } target="_blank">      
      <img
        src={ imag }
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Linkedin logo"
      />           
    </Navbar.Brand>       
  );
}

export default ImageIcon;
