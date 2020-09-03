import React, {Component} from 'react';
import {
    View,
    Image,
    Keyboard,
    TouchableWithoutFeedback,
    TextInput,
    TouchableOpacity,
    Animated,
    Easing,
    Dimensions,
    StyleSheet,
    Text,
    StatusBar,
    Alert
} from 'react-native';
import usernameImg from "../../assets/username.png";
import passwordImg from "../../assets/password.png";
import eyeImg from "../../assets/eye_black.png";
import Logo from "./logo";
import Form from "./form";


class LoginForm extends Component {

    render() {

        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <StatusBar barStyle="light-content" backgroundColor="#edb879"/>
                    <Logo/>
                    <Form/>
                </View>
            </TouchableWithoutFeedback>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffc90e',
    }
});

export default LoginForm;
