const Navbar = () => {
  return (
    <div className="absolute top-0 w-screen z-50">
      <div className="navbar bg-gradient-to-r from-red-50 to-blue-50 text-blue-900 tracking-wider">
        <div className="navbar-start pl-2">
          <a href="#home" className="normal-case w-full h-full">
            <img
              className="w-12"
              src="/logo.png"
              alt="logo"
            />
          </a>
        </div>
        <div className="navbar-end pr-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </label>
            <ul tabIndex={0}
                className="menu dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 text-xl font-bold">
              <li><a href="#home">Home</a></li>
              <li><a href="#location">Location</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="hidden md:flex font-bold">
            <ul className="menu menu-horizontal p-0">
              <li>
                <a className="hover:bg-transparent hover:text-red-600"
                   href="#home">Home</a>
              </li>
              <li>
                <a className="hover:bg-transparent hover:text-red-600"
                   href="#location">Location</a>
              </li>
              <li>
                <a className="hover:bg-transparent hover:text-red-600"
                   href="#about">About Us</a>
              </li>
              <li>
                <a className="hover:bg-transparent hover:text-red-600"
                   href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;