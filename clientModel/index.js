/**
 * Created by yangbolun on 2019/1/19.
 */
import { createStore } from 'redux';
import { combineReducers } from 'redux';

const initialState = {
    info:
    {
        count: 0
    }

}


const readsReducer = function(state=initialState, action) {
    switch (action.type)
    {
        case 'ADD_TO_READS': {
            state.info.count += 1;
            return state
        }
        default:
            return state
    }
};

const allReducers = {
    reads: readsReducer,
}

const rootReducer = combineReducers(allReducers);

let store = createStore(rootReducer);

export { store };
