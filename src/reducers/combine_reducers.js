import {combineReducers} from 'redux';
import ReducerTopRecent from './reducer_top_recent';


const rootReducer = combineReducers({
    recent_top: ReducerTopRecent,
});

export default rootReducer;
