import React, { Component } from 'react';

import { Container, Content } from 'native-base';
import { NavBar } from '../components/NavBar';
import {HeadBar } from '../components/HeadBar';
import MainTabs from '../components/Tabs';



export default class MainView extends Component {

    render() {
        return (
            <Container>
            <HeadBar />
                <Content>
                    <MainTabs />
                </Content>
            <NavBar />
        </Container>
        );
    }
}