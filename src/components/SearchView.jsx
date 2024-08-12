import Hero from "./Hero";
import MovieCard from "./MovieCard";

const SearchView = ({keyword,searchResults}) => {
  //204083e4409a3e521128ff38d10f31ed
  //https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=204083e4409a3e521128ff38d10f31ed
  const title = `You are searching for ${keyword}`;
  const resultsHtml = searchResults.map((res,i)=>(
    <MovieCard movie={res} key= {i} />
    
  ))
  
  return ( 
    <>
    <Hero text = {title} />
    
    { searchResults.length > 0 ?  <div className="container">
      <div className="row">{resultsHtml}</div></div> : <h1>No results found.</h1>}

    </>
   );
}
 
export default SearchView;