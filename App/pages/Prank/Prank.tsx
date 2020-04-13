/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from "react";
import { Container, Header, Content, Text, Button, Toast, DatePicker, FooterTab, Icon, Item, Label, Input, Form } from "native-base";
import { View, Alert } from "react-native";
import { NavigationProp, RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import Footer from './../../Components/Footer';
import ToastExample from '../../Components/Toast';


interface User {
    name: string;
    secondName: string;
}

const Prank = () => {

    const navigation = useNavigation();
    const [info, setInfo] = React.useState<string>()
    const [user, setUser] = React.useState<User>({
        name: '',
        secondName: '',
    })

    const checUser = () => {
        if (user.name === 'Merge') {
            if (user.secondName === 'Requeest') {
                setInfo('MERGE REQUEST!')
            } else {
                setInfo('YOU MERGE, BUT NOT REQUEST')
            }
        } else {
            setInfo('YOU NOT MERGE')
        }
    }

    return (
        <Container>
            <Content padder>
                <Text>
                    {info}
                </Text>
                <Form >
                    <Item stackedLabel>
                        <Label>Введите имя</Label>
                        <Input
                            onChangeText={(value) => setUser({
                                ...user,
                                name: value,
                            })}
                        />
                    </Item>
                    <Item stackedLabel last>
                        <Label>Введите фамилию</Label>
                        <Input
                            onChangeText={(value) => setUser({
                                ...user,
                                secondName: value
                            })}
                        />
                    </Item>
                </Form>
                <Button onPress={() => {
                    checUser()
                }} block>
                    <Text>Проверить</Text>
                </Button>
            </Content>
            <Footer />
        </Container>
    );
};

// const styles = StyleSheet.create({
//     scrollView: {
//         backgroundColor: Colors.lighter,
//     },
//     engine: {
//         position: 'absolute',
//         right: 0,
//     },
//     body: {
//         backgroundColor: Colors.white,
//     },
//     sectionContainer: {
//         marginTop: 32,
//         paddingHorizontal: 24,
//     },
//     sectionTitle: {
//         fontSize: 24,
//         fontWeight: '600',
//         color: Colors.black,
//     },
//     sectionDescription: {
//         marginTop: 8,
//         fontSize: 18,
//         fontWeight: '400',
//         color: Colors.dark,
//     },
//     highlight: {
//         fontWeight: '700',
//     },
//     footer: {
//         color: Colors.dark,
//         fontSize: 12,
//         fontWeight: '600',
//         padding: 4,
//         paddingRight: 12,
//         textAlign: 'right',
//     },
// });

export default Prank;
