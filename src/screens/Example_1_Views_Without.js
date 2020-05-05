import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    Dimensions
} from 'react-native';
const Example_1_Views_Without = () => {

    const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor={'#142850'} />
            <SafeAreaView style={styles.container}>
                <View style={[
                    styles.box,
                    {
                        width: SCREEN_WIDTH / 2,                       
                    }
                ]}>
                    <Text style={styles.upText}>Sem o Hook</Text>
                    <Text style={styles.upText}>Orientação</Text>
                    <Text style={styles.subText}>{SCREEN_WIDTH > SCREEN_HEIGHT ? 'Landscape' : 'Portait'}</Text>
                    <Text style={styles.upText}>_ width</Text>
                    <Text style={styles.subText}>{SCREEN_WIDTH}</Text>
                    <Text style={styles.upText}>| height</Text>
                    <Text style={styles.subText}>{SCREEN_HEIGHT}</Text>
                    <Text style={styles.subText}>{`Note que os valores \n não são atualizados`}</Text>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#142850',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: '#27496d',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,    
        elevation: 5,
    },
    upText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#dddddd',
    },
    subText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#dae1e7',
    },
    smallText: {        
        fontSize: 20,
        fontWeight: 'bold',
        color: '#dae1e7',
    },

});


export default Example_1_Views_Without;