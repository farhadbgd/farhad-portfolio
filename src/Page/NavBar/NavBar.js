import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    // const [theme, setTheme] = useState(
    //     localStorage.getItem('theme') || 'light'
    // );
    // const toggleTheme = () => {
    //     if (theme === 'light') {
    //         setTheme('dark');
    //     } else {
    //         setTheme('light');
    //     }
    // };
    return (
        <div className=''>
            <div className="navbar bg-base-100">
                <div className="flex-1 ml-12">
                    <a href='/' className="btn btn-ghost normal-case text-xl ">farhad talukder</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal ">

                        <Link to='/' className='px-12 text-xl'>home</Link>
                        <Link to='/aboutme' className='px-12 text-xl'>about me</Link>
                        <Link to='/blog' className='px-12 text-xl mr-12'>blog</Link>



                    </ul>


                </div>
            </div>
        </div>
    );
};

export default NavBar;