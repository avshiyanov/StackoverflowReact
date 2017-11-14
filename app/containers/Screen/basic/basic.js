import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { appStyle } from '../../styles';
import SideMenu from 'react-native-side-menu';
import NavBar, { NavButton, NavTitle } from 'react-native-nav';
import Profile from '../../Screen/profile/profile';
import Menu from '../../Screen/menu/menu';
import Home from '../../Screen/home/home';
import List from '../../Screen/list/list';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Basic extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            selectedItem: 'Home',
        };
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen, });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen });
    }

    onMenuItemSelected = item => {
        this.setState({ isOpen: false, selectedItem: item, });
    }

    renderScene(component) {
        return (
        <View style={appStyle.wrapper}>
            { React.createElement(component, this.props) }
         </View>
        );
    }

    render() {
        let screenMap = {'Home' : Home, 'Stackoverflow' : List, 'Log Out': Profile};
        let container = this.renderScene(screenMap[this.state.selectedItem]);

        let menu = <Menu onItemSelected={this.onMenuItemSelected} />;
        
        return (
            <SideMenu menu={ menu } isOpen={this.state.isOpen} onChange={isOpen => this.updateMenuState(isOpen)}>
            <NavBar style={{navBar: appStyle.navBar}}>
                <NavButton onPress={() => this.toggle()}><Image source={require('./assets/ic_list.png')} /></NavButton>
                <NavTitle style={appStyle.navTitle}>{ this.state.selectedItem }</NavTitle>
                <View style={appStyle.navItem}></View>
            </NavBar>
                { container }
            </SideMenu>
        );
    }
}

Basic.propTypes = {
    onPress: PropTypes.func,
    onItemSelected: PropTypes.func,
};

