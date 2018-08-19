import {MAP_PROPERTIES} from '../constants/Constant';

export function mapAction(mapProperties={enableSearch:false,map:null,mapmarkers:[]}){
    return {
        type : MAP_PROPERTIES,
        payload : mapProperties
    }
}