import { GET_SAMPLE, GET_SAMPLES, DELETE_SAMPLE, UPDATE_SAMPLE, CREATE_SAMPLE } from '../../../shared/constants/ActionTypes';
  
const INIT_STATE = {
    error: '',
    loading: false,
    isAppDrawerOpen: false,
    updatingContent: false,
    message: '',
    samples: { data: [], total: 0 },
    deleted: false,
    created: false,
    updated: false,
    sample: null
};

const commonReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_SAMPLES: 
            return  { 
                ...state, 
                created: false, 
                deleted: false,
                updated: false,
                samples: action.payload,
                sample: null
            }

        case CREATE_SAMPLE:
            return { ...state, created: true }

        case UPDATE_SAMPLE:
                return { ...state, created: true }
        
        case DELETE_SAMPLE:
            return { ...state, deleted: true }

        case GET_SAMPLE: 
            return { ...state, sample: action.payload }    
        
        default:
            return state;
    }
    
}

export default commonReducer;