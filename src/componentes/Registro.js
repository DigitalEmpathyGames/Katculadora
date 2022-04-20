import React, { useContext} from 'react';
import {Cat } from 'react-kawaii/lib/native';
import {Animated, PanResponder, Text,TouchableWithoutFeedback, View } from 'react-native';
import { ContextoCreate } from '../context/CatculadoraContext';
import useRegistro from '../hooks/useRegistro';
import estilos from '../tema/AppTema';



const Registro = ({registro,borrarVarios,setBorrarVarios}) => {

    const{
        pan,
        colorBorde,
        setColorBorde,
        borrar,
        setBorrar
    } = useRegistro();
    const {actualizarRegistros} = useContext(ContextoCreate);
    presionarVariosRapido = () =>{
        if(borrarVarios.length > 0){
            marcarBorrado();
        }
    }
    const marcarBorrado = () => {
        let colorNuevo;
        let nArr=[];
        if(colorBorde == 'white'){
            colorNuevo = '#FF6961';
            nArr = borrarVarios.map(
                (registro) => {
                    return registro;
                }
            );
            nArr.push(registro.id);
            setBorrarVarios(nArr);
        }else{
            colorNuevo = 'white';
            borrarVarios.splice(borrarVarios.indexOf(registro.id),1);
            nArr = borrarVarios.map(
                (registro) => {
                    return registro;
                }
            );
            setBorrarVarios(nArr);
        }
        setColorBorde(colorNuevo);
    }


    const deslizar = async () =>{
        let posicionItem = parseFloat(JSON.stringify(pan.x));
        if(posicionItem > 266.0){
            if(borrar){
                if(borrarVarios.indexOf(registro.id) > -1){
                  borrarVarios.splice(borrarVarios.indexOf(registro.id),1)
                }
              let aBorrar = [];
              aBorrar.push(registro.id);
              setBorrar(false);
              let accActualizaRegs = {
                  accion: 1,
                  objeto:aBorrar
              }
              actualizarRegistros(accActualizaRegs);
          }
          
    
        }

      }

      const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
          null,
          {
            dx: pan.x // x,y are Animated.Value
            
          }
        ],{
          listener: () => deslizar(),
          useNativeDriver:false
        }),
        onPanResponderRelease: () => {
          Animated.spring(
            pan, // Auto-multiplexed
            { toValue: { x: 0, y: 0 } } // Back to zero
            
          ).start();
        },
    });



    if(registro){
        return (
            
            <View style={{flex:1}}>
                <Animated.View 
                    style={[estilos.contenedorBorrar,{opacity:pan.x.interpolate({
                        inputRange: [0, 250],
                        outputRange: [0, 1],
                      })}]}
                >
                    <View style={{justifyContent: 'center'}} >
                        <Text style={estilos.textoRegistro}>
                            BORRAR
                        </Text>            
                    </View>


                    <View style={
                        {
                            height:50,
                            width:50,
                            backgroundColor:'#F3B1CD',
                            borderRadius:100,
                            justifyContent: 'center',
                            borderWidth:5,
                            borderColor:'white',
                            marginHorizontal:10,
                            marginVertical:3
                        }
                    }>
                        <Cat size={50} mood="sad" color="#ADDFEC" />
                    </View>

                    
                </Animated.View>

                <Animated.View
                    {...panResponder.panHandlers}
                    style={pan.getLayout()}
                >
                        <View key= {registro.id} style={[estilos.itemRegistro,{borderColor:colorBorde}]}>
                            <View style={{flexDirection:'column',left:20,flex:5}}>
                                <View>
                                    <Text style={estilos.textoRegistro}>
                                        {registro.fecha}
                                    </Text>
                                </View>
                                <View >               
                                    <Text numberOfLines={1} adjustsFontSizeToFit style={estilos.textoRegistro}>
                                        {registro.operacion}&nbsp;=&nbsp; {registro.resultado}
                                    </Text>
                                </View>                    
                            </View>
                            <TouchableWithoutFeedback
                                onPress={presionarVariosRapido}
                                onLongPress={marcarBorrado}
                            >
                                <View style={[estilos.boton,{flex:1,marginVertical:10,alignItems:'center',backgroundColor:'#B8BFC7',height:50,width:20}]}>
                                    {
                                        registro.emote
                                    }
                                </View>
                            </TouchableWithoutFeedback>
                        </View>                         
                </Animated.View>
            </View>
        )
    }else{
        return <></>
    }


}

export default Registro;
  