
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SearchView from './components/SearchView';
import { useState,useEffect } from 'react';
import MovieView from './components/MovieView';
import ErrorComp from './components/ErrorComp';

function App() {

  const [searchResults, setSearchResults] =useState ([]);
  const [searchText,setSearchText] =useState('');

useEffect(()=> {

if (searchText) {

fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=204083e4409a3e521128ff38d10f31ed`).then(res => res.json()).then(data => {
  console.log(data);
  setSearchResults(data.results )

})}
},[searchText])
  return (
    <Router >
    <div >

       
      <Navbar  searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
      <Route exact path = "/"  element={<Home/>}/>
      <Route path = "/about"  element={ <About/>}/>
      <Route path = "/search" element={<SearchView keyword={searchText} searchResults={searchResults}/>}/>
      <Route path = "/movies/:id"  element={ <MovieView/>}/>
      <Route path = "*"  element={ <ErrorComp/>}/>

      </Routes>
   
   
    </div>
    </Router>
    
  );
}

export default App;





