import {MAP_PROPERTIES} from '../constants/Constant'

export default function mapReducer(state={},action){
    switch(action.type){
        case MAP_PROPERTIES :
            return Object.assign({},action.payload);
        default :
            return state;
    }
}