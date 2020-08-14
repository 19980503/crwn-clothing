import React from 'react';

import {Link} from 'react-router-dom';

import './header.styles.scss';

import {ReactComponent as Logo} from '../../asserts/4.2 crown.svg'

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
          <Logo className='logo'/>
        </Link>
        <div style={{display: 'flex'}}>
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

        </div>
    </div>
)


export default Header;