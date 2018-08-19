import React from 'react';
import { Card, CardTitle, CardText, Avatar } from 'react-md';

const style = { marginTop: '5%', maxWidth: '70%' };
export default () => {
  return <div><Card raise={true} style={style} className="md-block-centered">
    <CardTitle
      title="ReactJs"
      subtitle="with Material Design"
      avatar={<Avatar src="https://avatar.skype.com/v1/avatars/adithya.jalda?auth_key=59011985&size=m" className="avatar_size" role="presentation" />} />
    <CardText>
      <p>
        Hello, I am Adithya working as Software Developer at Charter Global Inc. This app provides a demo on how we developed a ReactJs application using material design
      </p>
    </CardText>
  </Card></div>;
}