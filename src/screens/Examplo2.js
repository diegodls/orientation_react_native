/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions
} from 'react-native';
import {screenDimensions} from '../constants/orientation'


const BACKGROUND_COLOR = '#022c43';
const BACKGROUND_COLOR2 = '#248888';
const BOX_COLOR = '#053f5e';
const BORDER_COLOR = '#053f5e';
const FONT_COLOR_UP = '#3c6562';
const FONT_COLOR_SUB = '#ed6363';

//bolar um jeito de trocar de cor fora do style, tipo um use useEffect para trocar tudo de uma vez

const App = () => {

    //utilização do hook [1]
    const screenOrientation = screenDimensions();

    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor={BACKGROUND_COLOR} />
            <SafeAreaView style={[styles.container,
            {
                backgroundColor: screenOrientation.isLandscape ? BACKGROUND_COLOR2 : BACKGROUND_COLOR,
            }]}>
                <View style={[
                    styles.box,
                    {
                        width: screenOrientation.width / 2,
                        height: screenOrientation.height / 2,
                    }
                ]}>
                    <Text style={styles.upText}>Orientação</Text>
                    <Text style={styles.subText}>{screenOrientation.isLandscape ? 'Landscape' : 'Portait'}</Text>
                    <Text style={styles.upText}>_ width</Text>
                    <Text style={styles.subText}>{screenOrientation.width}</Text>
                    <Text style={styles.upText}>| height</Text>
                    <Text style={styles.subText}>{screenOrientation.height}</Text>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: BOX_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        elevation: 5,
    },
    upText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: FONT_COLOR_UP,
    },
    subText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: FONT_COLOR_SUB,
    },

});

export default App;

/*
#113c4a
#265a5c
#3f7b70
#dddddd
#3b6978
#dae1e7
#00909e
#27496d
#142850
*/