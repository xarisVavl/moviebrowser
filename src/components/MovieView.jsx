import { useParams } from "react-router-dom";
import Hero from "./Hero";
import { useEffect, useState } from "react";



const MovieView = () => {
  const {id} = useParams();
 const [movieDetails,setMovieDetails] = useState({});
 const [isLoading,setIsLoading] = useState(true);
  
 useEffect(()=> {

 fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=204083e4409a3e521128ff38d10f31ed&language=en-US`).then(res => res.json()).then(data => {
  setMovieDetails(data);

    setIsLoading(false)


 
 })

 },[id])

 const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
 const backdropUrl =`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
 return ( 
    <>
      
    {isLoading && <Hero text='Loading ...'/>}
   {!isLoading && <Hero text={movieDetails.original_title} backdrop={backdropUrl} />}
   <div className="container my-5">
    <div className="row">
      <div className="col-md-3"><img src={posterPath} alt="..." className="img-fluid shadow rounded" /></div>
      <div className="col-md-9"><h2>{movieDetails.original_title}</h2>
      <p className="lead"> {movieDetails.overview}</p></div>
    </div>
   </div>
    </>
   );
}
 
export default MovieView;