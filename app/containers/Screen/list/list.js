import React, { Component, } from 'react';
import { connect } from 'react-redux';
import { appStyle } from '../../styles';
import Utils from '../../../utils/utils';
import {
    ScrollView,
    TouchableHighlight,
    View,
    Text,
} from 'react-native';

class List extends Component {

    constructor(props) {
        super(props)
        this.state = { searching: true}
    }

    componentWillMount(){
        this.search();
    }

    search() {
        this.setState({ searching: true })    
        this.props.fetchQuestions().then( () => {
            this.setState({searching: false})
        });
    }

    questions() {
        return Object.keys(this.props.searchedQuestions).map(key => this.props.searchedQuestions[key])
    }

    render() {
        let counter=0;
        return (
            <ScrollView style={appStyle.scrollSection} >
            {!this.state.searching && this.questions().map((question) => {
                counter += 1;
                let color = counter%2 == 1 ? '#d3d3d3' : 'white';
                return <View key={question.id} style={appStyle.listItem} backgroundColor = {color}>
                    <Text style={appStyle.text} numberOfLines={1}>{ Utils.plainText(question.title) }</Text>
                </View>
            })}
            </ScrollView>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchedQuestions: state.searchedQuestions,
    };
}
export default connect(mapStateToProps)(List);