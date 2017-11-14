import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { appStyle } from '../../styles';

import {
  View,
  ScrollView,
  Text,
} from 'react-native';

export default class Menu extends Component {
    render() {
        return (
            <ScrollView scrollsToTop={false} style={appStyle.menu}>
            <View style={appStyle.listItem}>
            <Text style={appStyle.text} onPress={() => this.props.onItemSelected('Home')}>
                Home
            </Text>
            </View>
            <View style={appStyle.listItem}>
            <Text style={appStyle.text} onPress={() => this.props.onItemSelected('Stackoverflow')}>
                Stackoverflow
            </Text>
            </View>
            <View style={appStyle.listItem}>
            <Text style={appStyle.text} onPress={() => this.props.onItemSelected('Log Out')}>
                Log out
            </Text>
            </View>
            </ScrollView>
        );
    }
}

Menu.propTypes = {
    onItemSelected: PropTypes.func
};
