import { NavLink, withRouter } from "react-router-dom"
const Navbar = (props) => {
    return (
        <header className="container mx-auto py-4 font-sans">
            <nav className="flex justify-between">
                <strong className="text-gray-600 font-bold text-xl"><NavLink to="/">TechFeed</NavLink></strong>
                {
                    props.isLoggedIn ? <AuthNavbar /> : <NonAuthNavbar />
                }
            </nav>
        </header>
    )
}
function NonAuthNavbar() {
    return (
        <ul className="flex text-gray-400">
            <NavLink className="mx-2 capitalize " activeClassName="font-bold text-black" to="/" exact>home</NavLink>
            <NavLink className="mx-2 capitalize " activeClassName="font-bold text-black" to="/sign-in">sign in</NavLink>
            <NavLink className="mx-2 capitalize " activeClassName="font-bold text-black" to="/sign-up">sign up</NavLink>
        </ul>
    )
}

function AuthNavbar() {
    return (
        <ul className="flex text-gray-400">
            <NavLink className="mx-2 capitalize " activeClassName="font-bold text-black" to="/" exact>home</NavLink>
            <NavLink className="mx-2 capitalize " activeClassName="font-bold text-black" to="/sign-in">New Article</NavLink>
            <NavLink className="mx-2 capitalize " activeClassName="font-bold text-black" to="/sign-up">Settings</NavLink>
            <NavLink className="mx-2 capitalize " activeClassName="font-bold text-black" to="/sign-up">Profile</NavLink>

        </ul>
    )
}
export default withRouter(Navbar);