import React, { Component } from 'react';
import './Dashboard.css';
import DashboardCard from './../../components/DashboardCard/DashboradCard';
import {Responsive,Container,Grid} from 'semantic-ui-react';

const menuItems = ["Profile","My_Locations","History","Earnings","Search"];
class Dashboard extends Component{
    
    render(){
    let items = menuItems.map((menuItem,index)=>{
        return  (<Grid.Column key={menuItem+index}>
                    <DashboardCard name={menuItem.replace("_"," ")}/>
                </Grid.Column>)
    });
        return(    
            <Container>
                <Responsive minWidth={768}>
                <Grid columns={4}>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row>
                {items} 
                {/* <Grid.Column>
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
                </Grid.Column> */}
                </Grid.Row>
                </Grid>
                </Responsive>

            </Container>
            
        )
    }
}
export default Dashboard;
