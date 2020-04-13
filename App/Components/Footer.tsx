import React from 'react';
import { FooterTab } from 'native-base';
import { Button } from 'native-base';
import { Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const navigation = useNavigation();

    return (
        <FooterTab>
            <Button onPress={() => navigation.navigate('Prank')}>
                <Icon name="apps" />
            </Button>
            <Button onPress={() => navigation.navigate('Info')}>
                <Icon name="camera" />
            </Button>
            <Button active>
                <Icon active name="navigate" />
            </Button>
            <Button>
                <Icon name="person" />
            </Button>
        </FooterTab>
    );
}

export default Footer;
