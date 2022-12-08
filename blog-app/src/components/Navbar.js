import { NavLink, withRouter } from "react-router-dom";
import { FaUser, FaEyeDropper } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
const Navbar = (props) => {
  return (
    <header className="container mx-auto py-4 font-sans">
      <nav className="flex justify-between">
        <strong className="text-gray-600 font-bold text-xl">
          <NavLink to="/">TechFeed</NavLink>
        </strong>
        {props.isLoggedIn ? <AuthNavbar /> : <NonAuthNavbar />}
      </nav>
    </header>
  );
};
function NonAuthNavbar() {
  return (
    <ul className="flex text-gray-400">
      <NavLink
        className="mx-2 capitalize "
        activeClassName="font-bold text-black"
        to="/"
        exact
      >
        home
      </NavLink>
      <NavLink
        className="mx-2 capitalize "
        activeClassName="font-bold text-black"
        to="/sign-in"
      >
        sign in
      </NavLink>
      <NavLink
        className="mx-2 capitalize "
        activeClassName="font-bold text-black"
        to="/sign-up"
      >
        sign up
      </NavLink>
    </ul>
  );
}

function AuthNavbar() {
  return (
    <ul className="flex text-gray-400">
      <NavLink
        className="mx-2 capitalize "
        activeClassName="font-bold text-black"
        to="/"
        exact
      >
        home
      </NavLink>
      <NavLink
        className="mx-2 capitalize flex"
        activeClassName="font-bold text-black"
        to="/new-article"
      >
        <FaEyeDropper /> <span className="ml-2">New Article</span>
      </NavLink>
      <NavLink
        className="mx-2 capitalize flex"
        activeClassName="font-bold text-black"
        to="/settings"
      >
        <FcSettings />
        <span className="ml-2">Settings</span>
      </NavLink>
      <NavLink
        className="mx-2 capitalize flex"
        activeClassName="font-bold text-black"
        to="/profile"
      >
        <FaUser />
        <span className="ml-2">Profile</span>
      </NavLink>
    </ul>
  );
}
export default withRouter(Navbar);
