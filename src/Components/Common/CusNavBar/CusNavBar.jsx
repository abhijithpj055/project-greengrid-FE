import React from 'react'
import './CusNavBar.css'

function CusNavBar(){
  return(

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand" >GREEN GRID</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto  mb-lg-0">
        <li className="nav-item">
          Home
        </li>
        <li className="nav-item">
          Features
        </li>
        </ul>
        <div className="nav-item dropdown">
          <span className="nav-link dropdown-toggle user-drop-down"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            User
          </span>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><span className="dropdown-item">Action</span></li>
            <li><span className="dropdown-item">Another action</span></li>
            <li><span className="dropdown-item">Something else here</span></li>
          </ul>
        </div>
             
     
    </div>
  </div>
</nav>


  )
}

export default CusNavBar