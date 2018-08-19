import React, { Component } from 'react';
import Header from './components/Header';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as drawerAction from './actions/drawerAction';

class App extends Component {

  constructor(props,context){
    super(props);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer(){
    this.props.actions.drawerAction(this.props.isDrawerOpened);
  }

  render() {
    return (
      <div>
        <Header isDrawerOpened={this.props.isDrawerOpened} toggleDrawer={this.toggleDrawer}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isDrawerOpened: state.drawer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions : bindActionCreators(drawerAction,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);