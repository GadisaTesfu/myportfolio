import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Gado</a>
          {/* Form for small screens */}
          <div className="d-lg-none">
            <form className="d-flex form-inline">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Small"
                aria-label="Search"
                style={{ width: '100px' }}
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : 'collapse show'} navbar-collapse`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/intro">About Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/skill">Skill</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/project">Project</Link>
              </li>
            </ul>
            {/* Form for larger screens */}
            <form className="d-flex form-fixed">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ maxWidth: '150px' }}
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
