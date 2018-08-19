import React,{Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';


class GMap extends Component{

  constructor(props){
    super(props);
    this.map = null;
    this.search=null;
    this.map = {};
  }

  componentDidMount(){
    let map = this.map.__reactInternalMemoizedMaskedChildContext.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.data.map;
    this.props.action.mapAction({enableSearch:true,map,mapmarkers:this.props.mapProperties.markers===undefined?[]:this.props.mapProperties.markers});
  }
  shouldComponentUpdate(){
    return false;
  }
  render(){
      return <div>
          <GoogleMap
          ref= {ref =>  this.map = ref}
          defaultZoom={this.props.zoom}
          defaultCenter={this.props.center}>
        </GoogleMap>
    </div>;
  }
}

export default withScriptjs(withGoogleMap((GMap)));