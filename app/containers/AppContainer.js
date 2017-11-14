import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { appStyle } from '../containers/styles';
import Login from './Screen/login/login';
import Basic from './Screen/basic/basic';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class AppContainer extends Component {

    render() {
        const { applicationState, } = this.props;
        let loginComponent = <Login {...this.props} />;
        let basicComponent = <Basic {...this.props} />;

        return (
        	<View style={appStyle.wrapper}>
            { applicationState.loggedIn ? basicComponent : loginComponent }
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    applicationState: state.applicationState,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);