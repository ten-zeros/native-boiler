import { Header, Title, Right, Left } from 'native-base';

export function Top(props) {
    return (
        <Header>
            <Left>
            <Button transparent>
                <Icon name='menu'/>
            </Button>
            </Left>
            <Body>
                <Title>
                {props.Title}
                </Title>
            </Body>
            <Right>
            
            </Right>
        </Header>
    )
}



