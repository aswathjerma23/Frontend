function Navbar(){
    return(
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="text-3xl">
                Navbar
            </div>
            <div>
                <ul className="flex justify-between">
                    <li>Home</li>
                    <li>Services</li>
                    <li>About us</li>
                </ul>
            </div>
            <div>
                <h2>Get started</h2>
            </div>
        </nav>
    )
}

export default Navbar;