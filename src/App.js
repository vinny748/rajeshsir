import "./App.css";
import axios from "axios";
import { Route, Routes, NavLink, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Contactus from "./components/Contactus";
import Technologies from "./components/Technologies";
import Html from "./components/Html";
import Javascript from "./components/Javascript";
import Product from "./components/product";
import Products from "./components/products";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="users">
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="contactus">
                  Contactus
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="technologies">
                  Technologies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="products">
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* routes for components*/}
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="technologies" element={<Technologies />}>
          <Route path="html" element={<Html />} />
          <Route path="" element={<Navigate replace to="html" />} />
          <Route path="javascript" element={<Javascript />} />
        </Route>
        <Route path="products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
