import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Technologies() {
  return (
    <div className="mt-3">
      <ul className="nav nav-pills justify-content-around">
        <li className="nav-item">
          <NavLink className="nav-link" to="html">
            Html
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="javascript">
            Javascript
          </NavLink>
        </li>
      </ul>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default Technologies;
