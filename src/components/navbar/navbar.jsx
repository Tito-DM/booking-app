import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img alt="logo" />
        </div>
        <div className="navbar-button-container">
          <div className="navbar-button">
            <button className="navbar-button">Login</button>
          </div>
          <div className="navbar-menu-item">
            <button className="navbar-button">Register</button>
          </div>
        </div>
        {/* <div className="navbar-menu-item">
                <div className="navbar-menu">
                    <div className="navbar-menu-item">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="navbar-menu-item">
                        <Link to="/about">About</Link>
                    </div>
                    <div className="navbar-menu-item">
                        <Link to="/contact">Contact</Link>
                    </div>
                    
                </div>
                 */}
      </div>
    </div>
  );
};

export default Navbar;
