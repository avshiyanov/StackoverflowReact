import React, { Component, } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { appStyle } from '../../styles';

export default class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View >
              <Text style={appStyle.header}>
                  Good Bye
              </Text>
              <TouchableOpacity style={appStyle.button} onPress={ this.props.doLogout } >
                  <Text style={appStyle.text}>logout</Text>
              </TouchableOpacity>
            </View>
        );
    }
}

