const initialState = {
    movies:[],
    loading:false,
    error:null,

};

const movieReducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_MOVIES":
            return{
                ...state,
                loading:true,
                error:null,
            };
            case "FETCH_MOVIES_SUCCESS":
                return{
                    ...state,
                    loading:false,
                    movies:action.payload,
                    error:null,
                };
                case "FETCH_MOVIES_FAILURE":
                    return{
                        ...state,
                        loading:false,
                        error:action.payload,
                    };

                    case "SEARCH_MOVIES":
                        return{
                            ...state,
                            loading:true,
                            error:null,
                        };
                        case "SEARCH_MOVIES_SUCCESS":
                            return{
                                ...state,
                                loading:false,
                                movies:action.payload,
                                error:null,
                            };
                            case "SEARCH_MOVIES_FAILURE":
                                return{
                                    ...state,
                                    loading:false,
                                    error:action.payload,
                                };

                    case "FETCH_MOVIES_BY_CATEGORY":
                        return{
                            ...state,
                            loading:true,
                            error:null,
                        };
                        case "FETCH_MOVIES_BY_CATEGORY_SUCCESS":
                            return{
                                ...state,
                                loading:false,
                                movies:action.payload,
                                error:null,
                            };
                            case "FETCH_MOVIES_BY_CATEGORY_FAILURE":
                                return{
                                    ...state,
                                    loading:false,
                                    error:action.payload,
                                };
                            default:
                             return state;



};
};

export default movieReducer;