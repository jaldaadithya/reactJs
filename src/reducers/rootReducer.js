import {combineReducers} from 'redux';
import drawer from '../reducers/drawerReducer';
import mapProperties from '../reducers/mapReducer';


export default combineReducers({
    drawer,
    mapProperties
});    
