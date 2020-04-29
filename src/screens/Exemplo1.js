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
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';

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

const BACKGROUND_COLOR = '#142850';
const BOX_COLOR = '#27496d';
const BORDER_COLOR = '#27496d';
const FONT_COLOR_UP = '#dddddd';
const FONT_COLOR_SUB = '#dae1e7';

//[1] criação do hook com as informações atualizadas a cada rotação da tela.
const screenDimensions = () => {

  // [2] criação do objeto com as informações da tela atualizada a cada rotação do aparelho;
  const [screenInfo, setScreenInfo] = useState(Dimensions.get('screen'));

  useEffect(() => {

    //[3] abaixo: criação do hook que vai setar as informações (screenInfo) com o objeto após mudar a rotação do aparelho [4]
    const onChange = result => {
      setScreenInfo(result.screen);
    };

    //[4]abaixo: criação do EventListener, que vai verificar quando o Dimensions mudar('change'),vai passar um objeto para o onChange que foi criado acima.
    // Poderia ser usado um "(e) => e.alguma coisa" para acessar esse objeto e suas propriedades após o "'change',".
    Dimensions.addEventListener('change', onChange);

    //[5]abaixo: remoção do EventListener[2], caso contrario ele irá ficar verificando a todo momento, o que pode diminuir a performance do aplicativo
    return () => Dimensions.removeEventListener('change', onChange);

  }, []);

  //[6] retorna o objeto com as propriedades atualizadas a cada rotação do aparelho para o hook.
  return screenInfo;

};


const App = () => {

  //utilização do hook [1]
  const screenInfoUpdated = screenDimensions();
  const isLandscape = screenInfoUpdated.width > screenInfoUpdated.height;

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={BACKGROUND_COLOR} />
      <SafeAreaView style={styles.container}>
        <View style={[
          styles.box,
          {
            width: screenInfoUpdated.width / 2,
            height: screenInfoUpdated.height / 2,
          }
        ]}>
          <Text style={styles.upText}>Orientação</Text>
          <Text style={styles.subText}>{isLandscape ? 'Landscape' : 'Portait'}</Text>
          <Text style={styles.upText}>_ width</Text>
          <Text style={styles.subText}>{screenData.width}</Text>
          <Text style={styles.upText}>| height</Text>
          <Text style={styles.subText}>{screenData.height}</Text>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
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