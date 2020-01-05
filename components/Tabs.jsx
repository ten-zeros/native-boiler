import React, { Component } from 'react';
import { Tabs, Tab, View, Text } from 'native-base';

import Tresor from './Tresor';
import ToDoList from './ToDoList';

class MainTabs extends Component 
{
    render() 
    {
        return (
            <Tabs>
                <Tab heading="Who We Are" >
                    <Text>
                        We're tinkerers and creators committed to solving technology problems.
                    </Text>
                </Tab>
                <Tab heading="What We Do">
                    <Text>
                        We build software - from websites to mobile apps, and everything inbetween.
                    </Text>
                </Tab>
                <Tab heading="Why we exist">
                    <Text>
                        We Believe in a world where complex things are made simple.
                    </Text>
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