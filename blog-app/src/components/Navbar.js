const Navbar = () => {
    return (
        <header className=" container mx-auto py-4 font-sans">
            <nav className="flex justify-between">
                <strong className="text-green-600 font-bold text-xl">Conduit</strong>
                <ul className="flex text-gray-400">
                    <li className="ml-2 capitalize ">home</li>
                    <li className="ml-2 capitalize ">sign in</li>
                    <li className="ml-2 capitalize ">sign up</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar