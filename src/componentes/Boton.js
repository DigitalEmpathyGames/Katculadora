import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import estilos from '../tema/AppTema';

const Boton = (propiedades) => {
    let ancho = propiedades.ancho ? 180 : 80;
    let sizeFeed = propiedades.texto === '0' ? 85 : 35

    return(
        <TouchableNativeFeedback
            onPress={() => propiedades.funcion(propiedades.texto)}
            background={TouchableNativeFeedback.Ripple('#FFFFFFFF', false, sizeFeed)}
        >
            <View style={
                    [estilos.boton, 
                        {backgroundColor:propiedades.color,
                        width:ancho
                        
                        }]}>
                <Text style={estilos.textoBoton}>
                    {propiedades.texto}
                </Text>
            </View>
        </TouchableNativeFeedback>


    );
}

export default Boton;