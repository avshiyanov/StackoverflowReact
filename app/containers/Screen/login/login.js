import React, { Component, } from 'react';
import { appStyle } from '../../styles';
import { connect } from 'react-redux';
import {
	View,
  	TouchableOpacity,
  	Text,
    TextInput,
} from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { username: '', password: '' }
    }

    render() {
        const {username, password} = this.state
        return (
            <View style={appStyle.containerBox}>
            <Text style={appStyle.header}>
            Welcome
            </Text>
            <View style={appStyle.textField}>
            <TextInput placeholder='username' onChangeText={(username) => this.setState({username})}/>
            </View>
            <View style={appStyle.textField}>
            <TextInput placeholder='password' onChangeText={(password) => this.setState({password})} secureTextEntry={true}/>
            </View>
            <Text style={appStyle.error}>{this.props.error.text}</Text>
            <View style={{marginTop:50}}>
            <TouchableOpacity  style={appStyle.button} onPress={ () => this.props.doLogin(username, password)}>
                <Text style={appStyle.text}>Log In</Text>
            </TouchableOpacity>
            </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    error: state.error
  };
}

export default connect(mapStateToProps)(Login);