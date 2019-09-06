import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className= "header">
    <div className = 'content-container'>
    <div className = 'content__header'>
    <Link className ="header__title"  to="/"
     //activeClassName="is-active"
      exact={true}>
    <h1>Expensify</h1>
    </Link>
    <button onClick>logout</button>
    </div>
   </div>
  </header>
);

export default Header;


//<NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>

// <NavLink to="/help" activeClassName="is-active">Help</NavLink>