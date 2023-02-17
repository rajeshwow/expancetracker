import React from 'react'

const Navpage = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Keller <span style={{color:'#20CE9C'}}>|</span>  Postman</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-pills">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Cases</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#"  aria-disabled="true">Free Case Evaluation</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navpage