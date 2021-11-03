import React from 'react';
import classes from './NavBar.module.scss'
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {

    const checkActive = (match, location) => {
        if (!location) return false;
        const {pathname} = location;
        return pathname === '/';
    }

    return (
        <header>
            <div className="container">
                <div className={classes.wrapper}>
                    <div className={classes.logo}>
                        <Link to='/'>Marvel <span>information portal</span></Link>
                    </div>
                    <nav className={classes.nav}>
                        <ul className={classes.list__container}>
                            <li className={classes.list__item}>
                                <NavLink to='/' activeClassName="active" isActive={checkActive}>Characters</NavLink>
                            </li>
                            <li className={classes.list__item}>
                                <NavLink to='/comics' activeClassName="active">Comics</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default NavBar;