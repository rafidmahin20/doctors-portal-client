import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="shadow-sm">
        <div className="max-w-screen-xl p-4 mx-auto">
          <div className="flex items-center justify-between space-x-4 lg:space-x-10">
            <div className="flex lg:w-0 lg:flex-1">
              <h3 className=' text-3xl font-bold'>Doctors Portal</h3>
            </div>
      
            <nav className="hidden space-x-8 text-sm font-medium md:flex">
              <Link to='/' className="text-gray-500" href="">Home</Link>
              <Link to='/blog' className="text-gray-500" href="">Blog</Link>
              <Link to='/projects' className="text-gray-500" href="">Projects</Link>
              <Link to='/contact' className="text-gray-500" href="">Contact</Link>
            </nav>
      
            <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
                <button className="btn btn-primary px-5 py-2 text-sm font-medium text-white bg-red-400 rounded-lg">
                    Login
                </button>
            </div>
          </div>
        </div>
      </header>
    );
};

export default Header;