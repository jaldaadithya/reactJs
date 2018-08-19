import React,{Component} from 'react';
import SearchBar from '../components/SearchBar';
import GMap from '../containers/GMap';
import { Card, CardTitle, CardText,Avatar } from 'react-md';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as mapAction from '../actions/mapAction';

const style = { marginTop: '5%', maxWidth: '90%' };
class HomePage extends Component{

    constructor(props){
        super(props);
        this.pushMarkers = this.pushMarkers.bind(this);
    }

      render() {
          let mapmarkers = this.props.mapProperties.mapmarkers;
      return <div>
          <SearchBar mapProperties={this.props.mapProperties} pushMarkers={this.pushMarkers}/>
              <div className="md-grid">
                <Card style={style} className="md-cell md-cell--3 md-cell--right">
                      <CardTitle title="List of Search Results" />
                      
                      <CardText style={{maxHeight:'640px',overflowY:'auto'}}>
                      {(mapmarkers !== (undefined) && mapmarkers.length !==0) ?  (
                          mapmarkers.map((marker) => (<Card key={marker.id} id ={marker.id} raise={true} style = {{marginTop:'5px',height:'210px'}}
                             className="md-block-centered" onMouseOver={(e)=>this.onMarkerClick(e)}>
                            <CardTitle title={marker.title}
                            subtitle={marker.addr}
                            avatar={<Avatar src={marker.photo} className="avatar_size" role="presentation" />} onMouseOver={(e)=> e.stopPropagation()}/>
                      </Card>))) : 'No results found' }
                      </CardText>
                  </Card>
                  <Card style={style} className="md-cell md-cell--9">
                      <CardTitle title="Google map integration with React" />
                      <CardText>
                        <GMap   googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD2XUjHf0hOpC6OomoZQmAh2WAJQ1SFLEg&libraries=places"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `600px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                                zoom = {8}
                                center={{ lat: 17.387140, lng: 78.491684 }}
                                action = {this.props.actions} 
                                mapProperties={this.props.mapProperties}
                        />
                      </CardText>
                  </Card>
              </div>;
        </div>
    }

    pushMarkers(markers){
        let mapProperties = this.props.mapProperties;
        mapProperties.mapmarkers = markers;
        this.props.actions.mapAction(mapProperties)
        //console.log('mapProperties::::::::::::::::',mapProperties);
    }
    onMarkerClick(e){
        let mapmarkers = this.props.mapProperties.mapmarkers;
        mapmarkers.forEach(marker => {
            if(marker.id === e.target.id){
                window.google.maps.event.trigger(marker, 'click');
            }
        });
        
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        mapProperties: state.mapProperties
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions : bindActionCreators(mapAction,dispatch)
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);