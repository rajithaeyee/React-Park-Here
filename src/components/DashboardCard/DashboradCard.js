import React from 'react';
import {Card, Icon, Image } from 'semantic-ui-react'
import img from './../../assets/images/user.png';

const dashboradCard = (props) => {
    let description = "item";
    return (
        <Card>
    <Image src={img} />
    <Card.Content>
      <Card.Header>Profile</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2019</span>
      </Card.Meta>
      <Card.Description>User profile</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user secret' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
    );
}
export default dashboradCard;