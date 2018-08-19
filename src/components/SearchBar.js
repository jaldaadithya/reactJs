import React, { Component } from 'react';
import {TextField} from 'react-md';

class SearchBar extends Component {
    
    constructor(props){
        super(props);
        this.autoComplete = this.autoComplete.bind(this);
        this.pushMarkers = this.pushMarkers.bind(this);
    }
    autoComplete(){
        let map = this.props.mapProperties.map;
        let searchBox = new window.google.maps.places.SearchBox(document.getElementById('search'));
        let infoWindow = new window.google.maps.InfoWindow({
          content: ""
        });
        map.addListener('bounds_changed', function() {
            searchBox.setBounds(map.getBounds());
        });
        let markers = this.props.mapProperties.mapmarkers;
        searchBox.addListener('places_changed', () =>  {
            var places = searchBox.getPlaces();
  
            if (places.length === 0) {
              return;
            }
  
            markers.forEach(function(marker) {
              marker.setMap(null);
            });
            markers = [];
  
            // For each place, get the icon, name and location.
            var bounds = new window.google.maps.LatLngBounds();
            places.forEach(function(place) {
              //console.log(place);
              if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
              }
              var icon = {
                url: place.icon,
                size: new window.google.maps.Size(71, 71),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(17, 34),
                scaledSize: new window.google.maps.Size(25, 25)
              };
              let marker = new window.google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location,
                id: place.id,
                addr: place.formatted_address
              });
              //window.google.maps.event.addListener(marker, 'click', () => console.log('marker.id is clicked::::::::',marker.id));
              if(place.photos !==undefined){
                //console.log('photo url:::::::::::::',place.photos[0].getUrl({maxWidth: 200, maxHeight: 200}));
                marker.photo = place.photos[0].getUrl({maxWidth: 200, maxHeight: 200});
              }
              window.google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent("<div>"+marker.title+"</div><div>"+marker.addr+"</div>");
                infoWindow.open(map,marker);
              });
              markers.push(marker);
              
              if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
              } else {
                bounds.extend(place.geometry.location);
              }
            });
            // console.log('markers::::::::::::::::',markers);
            map.fitBounds(bounds);
              if(markers.length !== 0){
                  this.pushMarkers(markers);
              }
            });
          
          
    }
    pushMarkers(markers){
      this.props.pushMarkers(markers);
    }
    render(){
        
        return <TextField
        id="search"
        label="Location"
        placeholder="Atlanta"
        style={{marginLeft:'25%',marginRight:'25%',width:'50%'}} disabled={!this.props.mapProperties.enableSearch}
        onClick={this.autoComplete}
        />
    }


}
export default (SearchBar);