import * as types from '../constants/Constant'

export default function drawerReducer(state=false,action){
    switch(action.type){
        case types.DRAWER :
            return action.payload;
        default :
            return state;
    }
}