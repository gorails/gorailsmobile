import React, { Component } from 'react';
import {
    ScrollView,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Post from './components/Post'

export default class Posts extends Component<{}> {
    render() {
        return (
            <ScrollView style={styles.container}>
             <Post />
             <Post />
             <Post />
             <Post />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    }

});
