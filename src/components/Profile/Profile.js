import React from 'react';
import { Responsive,
    Container,
    Grid,
    Breadcrumb,
    Divider,
    Header,
    Icon,
    Table,
    Rating } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const profile = (props)=>{
    return(
        <Container>
                <Responsive minWidth={768}>
                <Grid columns={4}>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row>    
                <Breadcrumb size='big'>
                    <Breadcrumb.Section link><Link to="/dashboard">Dashboard</Link></Breadcrumb.Section>
                    <Breadcrumb.Divider icon='right chevron' />
                    <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
                </Breadcrumb> 
                
                </Grid.Row>
                <Grid.Row>
                <React.Fragment>    
                <Divider horizontal>
      <Header as='h4'>
        <Icon name='user secret' />
        Your Information
      </Header>
    </Divider>

    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={2}>First Name</Table.Cell>
          <Table.Cell>Jhon</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Last Name</Table.Cell>
          <Table.Cell>Doe</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>DOB</Table.Cell>
          <Table.Cell>19th OCT 1993</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Age</Table.Cell>
          <Table.Cell>26 Years</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Overall Ratings</Table.Cell>
          <Table.Cell><Rating icon='heart' defaultRating={1} maxRating={3} disabled/></Table.Cell>
        </Table.Row>
      </Table.Body>
        </Table>
        </React.Fragment>
                </Grid.Row>
                </Grid>
                </Responsive>
            </Container>
    );
}
export default profile;