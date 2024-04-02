import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return ( 
  <nav>
  <div className="nav-wrapper blue-grey">
    {/* <a href="#" class="brand-logo right">Logo</a> */}
    <ul id="nav-mobile" className="left hide-on-med-and-down">
      <li><Link to="/">Middleware-UI (Beta)</Link></li>
      {/* <li><a href="badges.html">Components</a></li> */}
      {/* <li><a href="collapsible.html">JavaScript</a></li> */}
    </ul>
  </div>
</nav>
  )
}

export default Nav