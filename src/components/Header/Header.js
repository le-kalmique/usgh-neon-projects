import React from 'react';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faUsers, faFire } from '@fortawesome/free-solid-svg-icons';

import  { getCurrentUser } from '../../utils/auth';

import "./header.css"

function Header() {

  const user = getCurrentUser();

  return (
    <header className="header">
      <Link to="/" className="link"><h1 className="header_title">NEON</h1></Link>
      <nav className="header_nav">
        <Link to="#" className="link header_link" activeClassName="header_link_active"><FontAwesomeIcon className="header_icon" icon={faNewspaper}/></Link>
        <Link to="#" className="link header_link" activeClassName="header_link_active"><FontAwesomeIcon className="header_icon" icon={faUsers}/></Link>
        <Link to="#" className="link header_link" activeClassName="header_link_active"><FontAwesomeIcon className="header_icon" icon={faFire}/></Link>
      </nav>

      {
        user ?
        <Link to="/profile" className="link header_link header_login">
          <span className="header_profile-name">{ user.username }</span>
        </Link>
        :
        <Link to="/auth/login" className="link header_link header_login">
          Login
        </Link>
      }
    </header>
  );
}


export default Header;