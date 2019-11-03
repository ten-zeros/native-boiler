import React, { Component } from 'react';
// import { Top } from '../components/Top';
import { Container, Content, Header, Footer, FooterTab, Body, Title, Button, View, Right, Icon, Card, CardItem} from 'native-base';

import { Image, Text} from 'react-native';


export default class MainView extends Component {

    render() {
        return (
            <Container>
            {/* <Top Title="Main View" /> */}
            <Header>
                <Body>
                    <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Hello, World</Text>
                </Body>
                <Right>
                <Icon name='cog' />
                </Right>
            </Header>
            <Content>
                <View>
                    <Text style={{ textAlign:'center', fontSize: 50, fontWeight: 'bold'}}>
                        TRESOR
                    </Text>
                </View>
            </Content>
                <Footer>
                    <FooterTab>
                        <Button full primary onPress={() => {alert('Practice Makes Perfect!')}}>
                            <Text>Click.Me</Text>
                        </Button>
                    </FooterTab>
                </Footer>
        </Container>
        );
    }
}