import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import light from "../imges/light-mode-svgrepo-com.svg";
import dark from "../imges/moon_dark_mode_night_mode_icon_190939.svg";

function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);

  // Apply background color based on theme
  let mystyle = {};
  if (theme === "light") {
    mystyle = {
      background: "yellow",
    };
  } else if (theme === "dark") {
    mystyle = {
      background: "blue",
    };
  }

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light" style={mystyle}>
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" to={"/home"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/about"}>
                  About Us!
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/login"}>
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/register"}>
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/contacts"}>
                  Contact Us!
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/product"}>
                  Product
                </NavLink>
              </li>

              {/* Theme toggle button */}
              {theme === "light" ? (
                <img
                  src={dark}
                  onClick={() => setTheme("dark")}
                  style={{ width: "30px", height: "30px", cursor: "pointer" }}
                  alt="Switch to Dark Mode"
                />
              ) : (
                <img
                  src={light}
                  onClick={() => setTheme("light")}
                  style={{ width: "30px", height: "30px", cursor: "pointer" }}
                  alt="Switch to Light Mode"
                />
              )}
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default NavBar;
