import React from 'react';
import {Card, Icon, Image } from 'semantic-ui-react';

const dashboradCard = (props) => {
    return (
      
    <Card onClick={props.selected}>
    <Image src={"/assets/images/"+props.imgUrl} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>test</span>
      </Card.Meta>
      <Card.Description>{props.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name={props.icon} />
      </a>
    </Card.Content>
  </Card>
    );
}
export default dashboradCard;