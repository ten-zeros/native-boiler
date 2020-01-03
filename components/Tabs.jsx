import React, { Component } from 'react';
import { Tabs, Tab } from 'native-base';

export default class Tabs extends Component 
{
    render() 
    {
        return (
            <Tabs>
                <Tab heading={this.props.Tab1} >

                </Tab>
                <Tab heading={this.props.Tab2}>

                </Tab>
            </Tabs>
        )
    }
}