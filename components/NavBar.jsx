import * as React from 'react';
import {Container } from 'react-native';
import { Footer, FooterTab, Button, Icon, Toast } from 'native-base';

export function NavBar(props) 
{
    return (
        <Footer>
            <FooterTab>
            <Button onPress={ () => { Toast.show({text: "Coming Soon!", buttonText: "Ok", position: "top"})}}>
                <Icon name="apps" />
            </Button>

            <Button>
                <Icon name="navigate" />
            </Button>

            <Button>
                <Icon name="person" />
            </Button>
            </FooterTab>
        </Footer>
    )
}