import React from 'react';
import { Cat } from 'react-kawaii/lib/native/';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilos from '../tema/AppTema';
const BotonMenu = () => {

    const navegacion = useNavigation();

    return (
        <>
          <View style = {{backgroundColor:'rgba(255,255,255,0)', width:50, position:'absolute',top:2,left:5}}>
            <TouchableOpacity
            onPress={() => navegacion.openDrawer()}
            >
              <View style={[estilos.boton,{height:58,width:58}]}>
                <View style={{marginHorizontal:3}}>
                  <Cat size={50} mood="blissful" color="#ADDFEC" />
                </View>
              </View>
            </TouchableOpacity>
          </View>

        </> 
    );
}

export default BotonMenu;