import { Link } from "react-router-dom";
import movieImage from "./movie.jpg"
const MovieCard = ({movie}) => {
  const posterUrl =   `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`;
  return (  
<div className="col-lg-3 col-md-3 col-2 my-4 ">
    <div className="card" >
       <img src={movie.poster_path ? posterUrl : movieImage} className="card-img-top" alt={movie.original_title}/>
  <div className="card-body">
    <h5 className="card-title">{movie.original_title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to = {detailUrl} className="btn btn-primary">Show details</Link>
  </div>
</div>
</div>
  );
}
 
export default MovieCard;