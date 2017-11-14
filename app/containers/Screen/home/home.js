import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { appStyle } from '../../styles';
import { connect } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';

class Home extends Component {
    render() {
        return (
            <View>
            <Text style={appStyle.header}>
            Hello, {this.props.profile.username}!
            </Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}

export default connect(mapStateToProps)(Home);