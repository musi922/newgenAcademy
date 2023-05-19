import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css';

const Navigation = () => {
  return (
    <div>
        <headers>
        <ul>
          <Link to={"/"} ><li>Homepage</li></Link>
          <Link to={"/properties"} ><li>Properties</li></Link>
          <Link to={"/Mlssearch"}><li>MLS Search</li></Link>
          <Link to={"/Communities"}><li>Communities</li></Link>
          <Link to={"/News"}><li>News</li></Link>
          <Link to={"/Services"}><li>Services</li></Link>
          <Link to={"/About Blair"}><li>About Blair</li></Link>
          <Link to={"/Contact"}><li>Contact</li></Link>
        </ul>

      </headers>
      
    </div>
  )
}

export default Navigation
