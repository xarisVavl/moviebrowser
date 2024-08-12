import { useState } from "react";
import { Link,   useNavigate} from "react-router-dom";


const Navbar = ({searchText,setSearchText}) => {
  const navigate= useNavigate();
  const updateSearchText = (e) => {
    navigate('/search');
    

    }
    const handleSubmit = (e) => {
      e.preventDefault();
      updateSearchText();
      setSearchText('');
    }
  return ( 
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Movie browser</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      
       
      </ul>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input className="form-control me-2" value={searchText} onChange={(e)=>setSearchText(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
   );
}
 
export default Navbar;