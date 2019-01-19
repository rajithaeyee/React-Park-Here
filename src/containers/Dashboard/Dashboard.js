import React, { Component } from 'react';
import './Dashboard.css';
import DashboardCard from './../../components/DashboardCard/DashboradCard';
import {Responsive,Container,Grid} from 'semantic-ui-react';
//"Profile","My_Locations","History","Earnings","Search"
import { withRouter } from 'react-router-dom'

const menuItems = [{
id: 1,
name: "Profile",
description: "Edit Your Profile",
imgUrl: "user.png",
url:'/dashboard/myprofile',
icon: "user secret"
},
{
id: 2,
name: "My Parks",
description: "Your Park Details",
imgUrl: "location.png",
url:'/dashboard/myparks',
icon: "location arrow"
},
{
id: 3,
name: "Earnings",
description: "Your Earnings",
imgUrl: "earnings.png",
url:'/dashboard/myearnings',
icon: "money bill alternate outline"
},
{    
id:4,
name: "Search",
description: "Search for Parkings",
imgUrl: "search.png",
url:'/dashboard/search',
icon: "searchengin"
}
];
class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

selectDashboardItemHandler = (selectedItem)=>{
    switch(selectedItem){
        case 'Profile':
        this.props.history.push('/dashboard/myprofile')
        break;
        case 'My Parks':
        this.props.history.push('/dashboard/myparks');
        break;
        case 'Earnings':
        this.props.history.push('/dashboard/myearnings');
        break;
        case 'Search':
        this.props.history.push('/dashboard/search');
        break;
        default:
        break;
    }
}
    render(){
    let items = menuItems.map((menuItem,index)=>{
        return  (<Grid.Column key={menuItem.id}>
                    <DashboardCard
                     name={menuItem.name}
                     description={menuItem.description}
                     imgUrl={menuItem.imgUrl}
                     icon={menuItem.icon} 
                     selected ={()=>this.selectDashboardItemHandler(menuItem.name)}/>
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
                </Grid.Row>
                </Grid>
                </Responsive>

            </Container>
            
        )
    }
}
export default withRouter(Dashboard);
