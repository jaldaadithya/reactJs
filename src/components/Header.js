import React from 'react';
import {Toolbar,Drawer,Button} from 'react-md';
import NavItem from './NavItem';
import { Route,BrowserRouter,NavLink } from 'react-router-dom';
import Info from '../components/Info';
import HomePage from '../containers/HomePage';
import ContactUs from '../components/ContactUs';

const navItems = [{
  label: 'Home',
  to: '/home',
  icon: 'home',
  exact: true
}, {
  label: 'Info',
  to: '/info',
  icon: 'bookmark'
}, {
  label: 'Contact Us',
  to: '/contactUs',
  icon: 'donut_large'
}];


const Header = ({isDrawerOpened,toggleDrawer}) => {
return (
  <BrowserRouter>
  <div>
      <Drawer id="drawer" type={Drawer.DrawerTypes.TEMPORARY} visible={isDrawerOpened} position='left' onVisibilityChange={toggleDrawer}
          navItems={navItems.map(props => <NavLink key={props.to} to={props.to}><NavItem {...props} /></NavLink>)} />
      <Toolbar id="toolbar" colored nav={<Button icon onClick={toggleDrawer}>menu</Button>} title="Charter Global" />
    <Route exact path="/" component={HomePage}/>
    <Route path="/home" component={HomePage}/>
    <Route path="/info" component={Info}/>
    <Route path="/contactUs" component={ContactUs}/>
  </div>
  </BrowserRouter>
);
}
export default (Header);