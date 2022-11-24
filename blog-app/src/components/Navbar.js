import { NavLink, withRouter } from "react-router-dom"
const Navbar = () => {
    return (
        <header className=" container mx-auto py-4 font-sans">
            <nav className="flex justify-between">
                <strong className="text-green-600 font-bold text-xl">Conduit</strong>
                <ul className="flex text-gray-400">
                    <NavLink className="ml-2 capitalize ">home</NavLink>
                    <NavLink className="ml-2 capitalize ">sign in</NavLink>
                    <NavLink className="ml-2 capitalize ">sign up</NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default withRouter(Navbar);