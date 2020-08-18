import React from 'react';

import {Link} from 'react-router-dom';

import './header.styles.scss';

import { auth} from '../../firebase/firebase.utils'

import {ReactComponent as Logo} from '../../asserts/4.2 crown.svg'

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
          <Logo className='logo'/>
        </Link>
        <div style={{display: 'flex' }}>
        <div className='options'>
           <Link className='option' to='/shop'>
           SHOP
           </Link>
        </div>

        
        <div className='options'>
           <Link className='option' to='/shop'>
           CONTACT
           </Link>
        </div>


        <div className='options'>
        {
              currentUser?
              <div  className='option' onClick={()=> auth.signOut() }> SIGNOUT </div>
              :
              <Link className='option' to='/signin'>
                 SIGNIN
              </Link>
           }
        </div>


        </div>
    </div>
)


export default Header;