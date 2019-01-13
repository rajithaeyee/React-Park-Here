import React, { Component } from 'react';
import './Dashboard.css';
import DashboardCard from './../../components/DashboardCard/DashboradCard';
import {Responsive,Container,Grid} from 'semantic-ui-react';

class Dashboard extends Component{
    render(){
        return(
            
            <Container>
                <Responsive minWidth={768}>
                <Grid columns={4}>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row>
                
                <Grid.Column>
                <DashboardCard />
                </Grid.Column>
                
                <Grid.Column>
                <DashboardCard />
                </Grid.Column>
                
                <Grid.Column>
                <DashboardCard />
                </Grid.Column>
                
                <Grid.Column>
                <DashboardCard />
                </Grid.Column>
                </Grid.Row>
                </Grid>
                </Responsive>

            </Container>
            
        )
    }
}
export default Dashboard;
