import React from 'react';
import { Route } from 'react-router-dom';
import { FontIcon, ListItem } from 'react-md';
const NavItem = ({ label, to, exact, icon }) => (
  <Route>
    {({ match }) => {
      let leftIcon;
      if (icon) {
        leftIcon = <FontIcon>{icon}</FontIcon>;
      }
      return (
        <ListItem
          active={!!match}
          primaryText={label}
          leftIcon={leftIcon}
          style={{fontWeight:'700'}}
        />
      );
    }}
  </Route>
);

  export default NavItem;