import style from './Navigation.module.css'
import React, { useState, useRef } from 'react'
import { Link } from 'gatsby'

const NavItem = ({ children }) => (
    <div className={style.item}>
        {children}
    </div>
)

const NavLink = ({ children, to }) => (
    <Link to={to} className={style.link}>
        {children}
    </Link>
)

const NavImage = ({ src, alt }) => (
    <img src={src} alt={alt} className={style.image}></img>
)

const CollapsedButton = ({}) => (
    <button className={style.collapsedButton}>X</button>
)

const ExpandedButton = ({}) => (
    <button className={style.expandedButton}>X</button>
)

const Navigation = ({ lightMode }) => {

    const menuStyle = lightMode ? style.light : style.dark
    const menuButton = window.innerWidth > 750 ? ExpandedButton : CollapsedButton 

    return (
        <div className={style.container}>
            <NavImage />
            <div className={style.linkContainer}>
                <NavItem>
                    <NavLink to='articles'>Articles</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='articles'>Articles</NavLink>
                </NavItem>
            </div>
            {menuButton}
        </div>
    )
}

export default Navigation