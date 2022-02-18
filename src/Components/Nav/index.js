import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'
import {FiTrendingUp} from 'react-icons/fi'
import {BsBookmarkPlusFill} from 'react-icons/bs'

export default function Nav(){
    return(
        <div className='NavBar'>
            <NavLink to="/alta" className="nav-link"><FiTrendingUp />Em Alta</NavLink>
            <NavLink to="/search" className="nav-link ">Busca</NavLink>
            <NavLink to="/mylist" className="nav-link"><BsBookmarkPlusFill />Minha Lista</NavLink>
        </div>
    )
}