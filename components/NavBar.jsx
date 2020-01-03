import * as React from 'react';
import {Container } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';

export function NavBar(props) 
{
    return (
        <Footer>
            <FooterTab>
            <Button>
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