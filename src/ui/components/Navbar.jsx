import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";

export const Navbar = () => {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Associations
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/marvel"
            >
              Marvel
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/dc"
            >
              DC
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/search"
            >
              Search
            </NavLink>
          </div>

          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            <ul className="navbar-nav d-flex flex-row gap-2 ml-auto">
              <span className="nav-item nav-link text-info">{user?.name}</span>
              <button className="nav-item nav-link btn" onClick={onLogout}>
                Logout
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
