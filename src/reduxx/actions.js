import axios from "axios";
const API_KEY= process.env.REACT_APP_KEY_TMDB;

export const fetchmovies=()=>{
    return(dispatch)=>{
        dispatch({
            type:"FETCH_MOVIES"
        });
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`).then((response)=>{
            dispatch({
                type:"FETCH_MOVIES_SUCCESS",
                payload:response.data.results,
            });
        }).catch((err)=>{
            dispatch({
                type:"FETCH_MOVIES_FAILURE",
                payload:err,
            });

        });
    };

};


export const searchmovies=(query)=>{
    return(dispatch)=>{
        dispatch({type:"SEARCH_MOVIES"});
        axios.get(   `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
        .then((response)=>{
            dispatch({type:"SEARCH_MOVIES_SUCCESS",payload:response.data.results});
        }).catch((err)=>{
            dispatch({type:"SEARCH_MOVIES_FAILURE",payload:err});
        });
    };

};




export const fetchMoviesByCategories = (category) => {
    return (dispatch) => {
        dispatch({
            type: "FETCH_MOVIES_BY_CATEGORY",
        });

        axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`)
            .then((response) => {
                dispatch({
                    type: "FETCH_MOVIES_BY_CATEGORY_SUCCESS",
                    payload: response.data.results,
                });
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_MOVIES_BY_CATEGORY_FAILURE",
                    payload: err, 
                });
            });
    };
};
