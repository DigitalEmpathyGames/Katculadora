import React, { useContext, useEffect, useRef, useState } from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import PantallaCatculadora from '../pantallas/PantallaCatculadora';
import {  AppState, View } from 'react-native';
import { Cat,Ghost } from 'react-kawaii/lib/native/';
import ItemMenuLateral from '../componentes/ItemMenuLateral';
import PantallaRegistro from '../pantallas/PantallaRegistro';
import SplashScreen from 'react-native-splash-screen';
import { ContextoCreate } from '../context/CatculadoraContext';
import useStorage from '../hooks/useStorage';
import useEmotes from '../hooks/useEmotes';


const Drawer = createDrawerNavigator();


const NavegadorLateral = () => {
  const {actualizarRegistros} = useContext(ContextoCreate);
  const {obtenerData} = useStorage();
  const {dibujarEmoteFromJSON} = useEmotes();
  const appState = useRef(AppState.currentState);
  useEffect(
    
    ()=>{

      async function cargarRegistros  () {
        let registrosBD = await obtenerData('registros');
        if(registrosBD != null && registrosBD != undefined){
          let registrosEnBD = registrosBD.map((itemReg) => {
            let emoteReg = dibujarEmoteFromJSON(itemReg.emote);
            let registro  = {
                  id : itemReg.id,
                  fecha: itemReg.fecha,
                  operacion : itemReg.operacion,
                  resultado : itemReg.resultado,
                  emote : emoteReg.emote,
                  emoteKey : emoteReg.key
              }
              return registro;
            });

          let accActualzaRegs = {
            accion: 2,
            objeto: registrosEnBD
          }
          actualizarRegistros(accActualzaRegs);
        }else{
        }
        SplashScreen.hide();
      }
      cargarRegistros();
      
    },[]
  );

  return (
    <Drawer.Navigator
        detachInactiveScreens={false}
        screenOptions = {{
          headerShown: false,
        }}
        drawerContent={(props) => MenuPersonalizado(props)}
    >
      <Drawer.Screen name="Catculadora" 
      component={PantallaCatculadora} />
      <Drawer.Screen name="Registro" 
      component={PantallaRegistro} />
    </Drawer.Navigator>
  );
}

const MenuPersonalizado = (props) => {

    const navegacion = props.navigation;
    return(
      <DrawerContentScrollView
        style={{
          backgroundColor: '#f3dec9'
        }}
      >
      <View >
          
          <ItemMenuLateral
            navegacion={navegacion}
            haciaComponente="Catculadora"
            emoticon = {<Cat size={50} mood="blissful" color="#80FFD7" />}
            texto="Catculadora"
          >
          </ItemMenuLateral>

          <ItemMenuLateral
            navegacion={navegacion}
            haciaComponente="Registro"
            emoticon = {<Ghost size={50} mood="blissful" color="#FDFD96" />}
            texto="Registro"
          >
          </ItemMenuLateral>

      </View>
      </DrawerContentScrollView>
    );
}

export default NavegadorLateral;
