import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import estilos from '../tema/AppTema';
const ItemMenuLateral = (props) => {
  let emoticon = props.emoticon;
  let navegacion = props.navegacion;
  let haciaComponente = props.haciaComponente;
  let texto = props.texto;
    return (
        <>
          <TouchableOpacity
            onPress={() => navegacion.navigate(haciaComponente)}
          >
            <View style={estilos.itemMenu}>
              <View style={{flex:1, left:20,alignItems:'center'}}>
                    {emoticon}
              </View>
              <View style={{flex:4,alignItems:'center'}}>
                <Text style = {estilos.textoMenu}>{texto} </Text>
              </View>
              
            </View>
          </TouchableOpacity>
        </>
    )
}

export default ItemMenuLateral;