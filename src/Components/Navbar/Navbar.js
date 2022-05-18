import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth)
  const logout = () => {
    signOut(auth);
  } 
    return (
        <div class="navbar flex bg-base-100 px-12">
          <div>
          <Link to='/' class="btn btn-ghost normal-case text-2xl">Task Manager</Link>
            </div>
            <div>
                <NavLink to='/' className='text-xl'>Home</NavLink>
            </div>
            <div className='ml-auto'>
            {user?<Link to='/login' className='text-xl btn' onClick={logout}>Logout</Link>:<Link to='/login' className='text-xl btn'>Login</Link>}
            </div>
      </div>
    );
};

export default Navbar;