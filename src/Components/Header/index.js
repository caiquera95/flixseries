import './header.css';
import React, {useState} from 'react'
import {Link, withRouter, } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa'

import logo from '../../assets/flixlogo.png'

function Header(props) {
  const [search, setSearch] = useState("")

  function searchs(e){
      e.preventDefault()
      props.history.push("/search?query=" + search)
      setSearch("")
  } 

    return (
        <header>
            <Link  className="logo" to="/"><img src={logo} /></Link>
            {/* <Link  className="logo" to="/">Flix.<span className='series'>series</span></Link> */}
            <form onSubmit={searchs} >
            <input 
            id="search" 
            name="query"
            id="query"
            type="search" 
            placeholder="Search..." 
            onChange={(e) => setSearch(e.target.value)}
             />
            <button type="submit"><FaSearch/></button>    
            </form>
        </header>
    )
}

export default withRouter(Header)