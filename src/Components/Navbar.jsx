import React from 'react';

const Navbar = () => {
    return (
        <div>

            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                         <li><a>Home</a></li>
                        <li><a href="">Adversite</a></li>
                        <li><a>Supports</a></li>
                        <li><a>About</a></li>
                        </ul>
                    </div>
                    <div className='flex'>
                        <img src="/icon/S 1.png" alt="" srcset="" />
                         <a className="btn btn-ghost text-xl text-[#0F2137]">StartupLand</a>
                    </div>
                   
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#02073E]">
                        <li><a>Home</a></li>
                        <li><a href="">Adversite</a></li>
                        <li><a>Supports</a></li>
                        <li><a>About</a></li>                   
                    </ul>
                  <img className='h-4' src="/icon/search.png" alt="" srcset="" />
                </div>
                <div className="navbar-end gap-6">
                    <div className='flex  gap-1.5 items-center '>
                        <img className='h-4' src="/icon/lock.png" alt="" srcset="" />
                        <p><a href="">Login</a></p>
                    </div>
                  <a className="btn text-[#E5A740] bg-[#FFF0D7] border-none">Get Started</a>
                 </div>
            </div>

        </div>
    );
};

export default Navbar;