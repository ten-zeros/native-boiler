import React, { Component } from 'react';
// import { Top } from '../components/Top';
import { Container, Content, Header, Body, Title, Button, View, Right, Icon, Card, CardItem} from 'native-base';
import { NavBar } from '../components/NavBar';
import {HeadBar } from '../components/HeadBar';
import { Image, Text } from 'react-native';


export default class MainView extends Component {

    render() {
        return (
            <Container>
            {/* <Top Title="Main View" /> */}
            {/* <Header>
                <Body>
                    <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Welcome</Text>
                </Body>
                <Right>
                <Icon name='cog' />
                </Right>
            </Header> */}

            <HeadBar />
            <Content>
                <View>
                    <Image 
                        source={require('../images/xi.png')}
                        style={{ width: '100%', height: '100%'}}
                        />
                </View>
            </Content>
                <NavBar />
        </Container>
        );
    }
}