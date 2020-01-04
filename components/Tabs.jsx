import React, { Component } from 'react';
import { Tabs, Tab } from 'native-base';
import Tresor from './Tresor';
import ToDoList from './ToDoList';

class MainTabs extends Component 
{
    render() 
    {
        return (
            <Tabs>
                <Tab heading={"Logo"} >
                    <Tresor />
                </Tab>
                <Tab heading={"To Do"}>
                    <ToDoList />
                </Tab>
                <Tab heading={"etc"}>
                    
                </Tab>
            </Tabs>
        )
    }
}

// MainTabs.defaultProps = {
//     Tab1Title: "Logo",
//     Tab1: <Tresor />,
//     Tab2Title: "To Do",
//     Tab2: <ToDoList />,
//     Tab3Title: "etc",
//     Tab3: "Hello!"
// }

export default MainTabs