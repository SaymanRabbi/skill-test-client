import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar flex bg-base-100 px-12">
          <div>
          <Link to='/' class="btn btn-ghost normal-case text-2xl">Task Manager</Link>
            </div>
            <div>
                <NavLink to='/' className='text-xl'>Home</NavLink>
            </div>
            <div className='ml-auto'>
            <Link to='/login' className='text-xl btn'>Login</Link>
            </div>
      </div>
    );
};

export default Navbar;