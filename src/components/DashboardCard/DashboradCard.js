import React from 'react';
import {Container , Grid, Card, Icon } from 'semantic-ui-react'

const dashboradCard = (props) => {
    let description = "item";
    return (
            <Card>
                <Card.Content header='About Amy' />
                <Card.Content description={description} />
                <Card.Content extra>
                    <Icon name='user' />
                    4 Friends
            </Card.Content>
            </Card>
    );
}
export default dashboradCard;