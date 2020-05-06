# orientation_react_native
Aplicativo desenvolvido em [React Native](https://reactnative.dev) para demonstração de um Hook para monitorar a rotação/orientação do dispositivo, afim de melhor trabalhar o layout das telas/paginas do aplicativo. </br>

# :question: Por quê? 
Este aplicativo foi desenvolvido para testar o aprendizado de Hooks do [React Native](https://reactnative.dev), neste caso foi criado um hook para monitorar a rotação/orientação do dispositivo e aplicar esses dados em algumas paginas. </br>
Ao criar um aplicativo, podemos definir o tamanho dos elementos/componentes com base no tamanho da tela usando a propriedade `Dimensions` do React Native, porem essa propriedade acaba não endo alterada ao rotacionar o aparelho, fazendo com que o layout fique todo mal formatado/quebrado.</br>
O Hook criado neste projeto fica monitorando e alterando os tamanhos de acordo com a rotação do aparelho (Retrato/em pé ou paisagem/deitado), mantendo o layout organizado e no lugar (veja as iamgens de exemplos para melhor entendimento).</br>
# :iphone: Demo
![Demo](https://github.com/diegodls/orientation_react_native/blob/assets/orientation_react_native_gif.gif?raw=true)</br>

# :rocket: Iniciando
Para executar este aplicativo. você deverá ter um ambiente de [trabalho configurado](https://www.google.com/) para o desenvolvimento em [React Native](https://reactnative.dev).</br>
No meu caso, utilizei um dispositivo físico com sistema operacional Android para testes, mas você pode usar um emulador.</br></br>
**Começando:**
* Clone o repositório com o comando `git clone` ([veja mais](https://help.github.com/pt/github/creating-cloning-and-archiving-repositories/cloning-a-repository))
* Abra um prompt de comando (famoso cmd) na pasta raiz ou navegue até ela, e insira o comando `npx isntall` ou `npm install` ou `yarn install`, dependendo do gerenciador de pacotes que você usa, este comando serve para instalar os pacotes/módulos utilizado nesse projeto
* Após a instalação dos pacotes/módulos, você pode executar no emulador/dispositivo com o comando `npx react-native run-android`

# :nut_and_bolt: Módulos
Neste projeto foram utilizado os seguintes módulos:</br>
[react-navigation/stack-navigator](https://reactnavigation.org/) - *navegação entre telas*</br>
**E todas as dependências desses módulos que estão presentes em suas respectivas paginas.**

# :clap: Agradecimentos
Agradecimentos a todos os desenvolvedores dos módulos acima.

# :rocket: Notas/Problemas
None

# :warning: Licença
Você pode usar este aplicativos para estudos, e apenas para estudo, está proibido a sua publicação ou apropriação do código.

# :camera: Screenshots
![Screenshots](https://github.com/diegodls/orientation_react_native/blob/assets/orientation_react_native_png.png)</br>



