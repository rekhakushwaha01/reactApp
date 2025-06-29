const Header = () => {
  return (
    <header className="header bg-white border-bottom shadow-sm py-2" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container-fluid px-4">
        <div className="d-flex justify-content-between align-items-center">
          <img src="/SVG/abstart_logo.svg" alt="abstart_logo" className="abstart_logo" />
          <div className="right-section">
            <img src="/SVG/welcome.svg" alt="welcome" className="welcome" style={{ cursor: 'pointer' }} onClick={() => alert('Welcome to admin page')} />
            <img src="/SVG/logout.svg" alt="logout" className="logout" style={{ cursor: 'pointer' }} onClick={() => alert('You have been logged out!')} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
