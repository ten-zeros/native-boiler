import React, { Component } from 'react';

import { Container, Content } from 'native-base';
import { NavBar } from '../components/NavBar';
import { HeadBar } from '../components/HeadBar';
import MainTabs from '../components/Tabs';
import Map from '../components/Map';



export default class MainView extends Component {

    render() {
        return (
            <Container>
            <HeadBar />
                <Content>
                    {/* <MainTabs /> */}
                    <Map />
                </Content>
            <NavBar />
        </Container>
        );
    }
}