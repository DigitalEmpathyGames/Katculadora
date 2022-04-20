
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox, SafeAreaView, StatusBar } from 'react-native';
import estilos from './src/tema/AppTema';
import NavegadorLateral from './src/Navegadores/NavegadorLateral';
import { CatculadoraContext } from './src/context/CatculadoraContext';



LogBox.ignoreLogs([
  "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
]);

const App = ()=>{
  return(
      <SafeAreaView  style={estilos.fondo}>
        <StatusBar
          animated={true}
          backgroundColor="#D6EFF6"/>
        <NavigationContainer>
          <AppContext>
            <NavegadorLateral/>
          </AppContext>
        </NavigationContainer>
      </SafeAreaView>
  );

};

const AppContext = ({children}) =>{
  return(
    <CatculadoraContext>
      {children}
    </CatculadoraContext>
  );
}

export default App;
