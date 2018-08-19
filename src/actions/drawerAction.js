import * as types from '../constants/Constant';

export function drawerAction(isDrawerOpened){
    return {
        type : types.DRAWER,
        payload : !isDrawerOpened
    }
}