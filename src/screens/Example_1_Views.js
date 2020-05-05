import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';



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


const Example_1_Views = () => {

  //utilização do hook [1]
  const screenInfoUpdated = screenDimensions();
  const isLandscape = screenInfoUpdated.width > screenInfoUpdated.height;

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={'#142850'} />
      <SafeAreaView style={styles.container}>        
        <View style={[
          styles.box,
          {
            width: screenInfoUpdated.width / 2,
           
          }
        ]}>
          <Text style={styles.upText}>Com o Hook</Text>
          <Text style={styles.upText}>Orientação</Text>
          <Text style={styles.subText}>{isLandscape ? 'Landscape' : 'Portait'}</Text>
          <Text style={styles.upText}>_ width</Text>
          <Text style={styles.subText}>{screenInfoUpdated.width}</Text>
          <Text style={styles.upText}>| height</Text>
          <Text style={styles.subText}>{screenInfoUpdated.height}</Text>
          <Text style={styles.subText}>{`Note que os valores \n são atualizados`}</Text>
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
    borderWidth: 1,
    borderColor: '#27496d',
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

export default Example_1_Views;