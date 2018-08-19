import React from 'react';
import { Card, CardTitle, CardText } from 'react-md';

const style = { marginTop: '5%', maxWidth: '70%' };

export default () => {
    return <div><Card raise={true} style={style} className="md-block-centered">
    <CardTitle title=" Contact me" />
    <CardText>
      <p>
         @ skype id : adithya.jalda
      </p>
    </CardText>
  </Card></div>;
}