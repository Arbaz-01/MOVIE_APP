import 'font-awesome/css/font-awesome.min.css';
import { useDispatch } from "react-redux";
import { fetchMoviesByCategories } from "../reduxx/actions";


function Sidebar() {
    const dispatch = useDispatch();

    const handlecatClick=(category)=>{
        dispatch(fetchMoviesByCategories(category));
    };
 
    return (
        <aside className="sidebar">
        <div className="text">
        <h2>Nxtseries</h2><hr/>
        
    </div>
    <div className="left">
        <h5>Categories</h5>
       <button onClick={() => handlecatClick('top_rated')}><i className="fa fa-star-o"></i>  Popular</button>
    <button><i className="fa fa-angle-double-up"></i>Top Rated</button>
<button><i className="fa fa-film"></i>Upcoming</button>
<hr/>
    
       <button><i className="fa fa-hand-rock-o"> </i>  Action</button>
       <button><i className="fa fa-anchor"></i>Adventure</button>
   <button><i className="fa fa-drupal"></i>Animation</button>
        
          <button><i className="fa fa-smile-o"> </i>  Comedy</button>
          <button><i className="fa fa-search"></i>  Crime</button>
      <button><i className="fa fa-file-movie-o"></i>Documentary</button>
            
             <button><i className="fa fa-tripadvisor"> </i>  Drama</button>
             <button><i className="fa fa fa-group"></i>Family</button>
         <button><i className="	fa fa-magic"></i>Fantasy</button>
                
                <button><i className="fa fa-hourglass"></i>  History</button>
                <button><i className="fa fa-optin-monster"></i>Horror</button>
            <button><i className="fa  fa-music"></i>Music</button>

            <button><i className="fa fa-user-secret"> </i>  Mystery</button>
            <button><i className="	fa fa-gittip"></i>Romance</button>
        <button><i className="fa fa-grav"></i><span>Science Fiction</span></button>
               
               <button><i className="fa fa-television"> </i>  Tv Movie</button>
               <button><i className="fa fa-eye"></i>Thriller</button>
           <button><i className="fa fa-shield"> </i>War</button>
           <button><i className="fa fa-neuter"></i>Western</button>
{/* 
           <div className="movies-list">
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <div key={movie.id} className="movie-item">
                                <img src={movie.poster} alt={movie.title} style={{ width: '100px' }} />
                                <h4>{movie.title}</h4>
                                <p>{movie.genre}</p>
                                <p>Release Date: {movie.releasedate}</p>
                            </div>
                        ))
                    ) : (
                        <p>No movies loaded</p>
                    )}
                </div> */}
                   

    </div>    
        
    </aside>

    );
}
export default Sidebar;