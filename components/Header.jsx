import React from 'react';

const Header = () => {
 

  return (
    <>
      <div className="header">
        <img src="/SVG/abstart_logo.svg" className="abstart_logo" alt="abstart_logo" />
        <div className="right-section">
          <img src="/SVG/welcome.svg" className="welcome" alt="welcome" />
          <img src="/SVG/logout.svg" className="logout" alt="logout" />
        </div>
      </div>
     
      <img src="/SVG/separator.svg" alt="separator" className="header-separator" />
    </>
  );
};

export default Header;