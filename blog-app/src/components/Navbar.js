import { NavLink, withRouter } from "react-router-dom"
const Navbar = () => {
    return (
        <header className="container mx-auto py-4 font-sans">
            <nav className="flex justify-between">
                <strong className="text-green-600 font-bold text-xl"><NavLink to="/">Conduit</NavLink></strong>
                <ul className="flex text-gray-400">
                    <NavLink className="mx-2 capitalize " activeClassName="font-bold text-black"  to="/" exact>home</NavLink>
                    <NavLink className="mx-2 capitalize " activeClassName="font-bold text-black" to="/sign-in">sign in</NavLink>
                    <NavLink className="mx-2 capitalize " activeClassName="font-bold text-black" to="/sign-up">sign up</NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default withRouter(Navbar);