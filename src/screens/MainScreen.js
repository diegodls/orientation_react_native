import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TouchableWithoutFeedback,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';

import { screenDimensions } from '../constants/orientation';
import img_t from '../assets/img_t.png'

const BACKGROUND_COLOR = '#fbfbfb'

const MainScreen = ({ navigation }) => {

    const screenOrientation = screenDimensions();

    const example_1_text = `Neste exemplo podemos ver que com o uso do hook presente no arquivo \n     '../constants/orientation' \nAs dimensões são setadas a cada rotação do dispositivo, porem, sem o uso do hook, as dimensões não são atualizadas.`

    const example_2_text = `Neste exemplo podemos podemos ver como uma lista se comporta ao ter suas dimensões alteradas após a rotação do dispositivo. Não só a lista sofre alteração, mas as imagens também são redimensionadas para um tamanho proporcional as dimensões do dispositivo.`

    function getPercentage(num) {
        return (screenOrientation.height * num) / 100;
    }

    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor={'#222831'} />
            <SafeAreaView style={styles.mainContainer}>
                <View style={{
                    backgroundColor: '#222831',
                    width: screenOrientation.width,
                    height: getPercentage(40),
                }} />
                <View style={{
                    backgroundColor: '#fc951a',
                    width: screenOrientation.width,
                    height: screenOrientation.height - getPercentage(40),
                }} />
                <ScrollView

                    style={{
                        width: screenOrientation.width,
                        height: screenOrientation.height,
                        position: 'absolute',
                        flex: 1,
                    }}>
                    <View style={styles.contantContainer}>
                        <Image source={img_t} style={styles.image} />
                        <View style={styles.messageContainer}>
                            <View style={styles.headerContainer}>
                                <Text style={styles.headerText1}>O</Text>
                                <Text style={styles.headerText2}>rientação</Text>
                            </View>
                            <View style={styles.messageCard}>
                                <Text style={styles.messageText}>{example_1_text}</Text>
                                <View style={styles.buttonContainer}>
                                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('Example_1_Views_Without') }}>
                                        <View style={styles.buttonShape}>
                                            <Text style={styles.buttonText}>Sem o Hook</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('Example_1_Views') }}>
                                        <View style={styles.buttonShape}>
                                            <Text style={styles.buttonText}>Com o Hook</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                            <View style={styles.messageCard}>
                                <Text style={styles.messageText}>{example_2_text}</Text>
                                <View style={styles.buttonContainer}>
                                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('Example_2_Flatlist_Without') }}>
                                        <View style={styles.buttonShape}>
                                            <Text style={styles.buttonText}>Sem o Hook</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('Example_2_Flatlist') }}>
                                        <View style={styles.buttonShape}>
                                            <Text style={styles.buttonText}>Com o Hook</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: BACKGROUND_COLOR,
        alignItems: 'center',
        flex: 1,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
    },
    headerContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    headerText1: {
        color: '#fc951a',
        fontSize: 60,
        fontWeight: 'bold'
    },
    headerText2: {
        color: '#222831',
        fontSize: 55,
        fontWeight: 'bold'
    },
    contantContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    messageContainer: {
        alignItems: 'center',
        backgroundColor: BACKGROUND_COLOR,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 0,
        elevation: 5,
        width: '98%',
        marginBottom: 20,
    },
    messageCard: {
        padding: 10,
    },
    messageText: {
        color: '#222831',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    buttonShape: {
        backgroundColor: '#222831',
        width: 150,
        height: 60,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 0,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 0,
        elevation: 5,
    },
    buttonText: {
        color: '#fc951a',
        fontSize: 18,
        fontWeight: 'bold'
    },

})
export default MainScreen;