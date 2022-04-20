import React, { useContext, useEffect, useRef, useState } from 'react';
import { File } from 'react-kawaii/lib/native';
import {  Button, FlatList, Text, TouchableOpacity, View } from 'react-native';
import BotonMenu from '../componentes/BotonMenu';
import Registro from '../componentes/Registro';
import { ContextoCreate } from '../context/CatculadoraContext';
import useStorage from '../hooks/useStorage';
import estilos from '../tema/AppTema';
const PantallaRegistro = () => {
    const {registros,actualizarRegistros} = useContext(ContextoCreate);
    const [borrarVarios,setBorrarVarios] = useState([]);
    const {guardarData,formatearRegistro} = useStorage();


    useEffect(
        () => {
                if(registros.length > 0){
                    let registrosBD = registros.map((itemReg) => {
                        return (
                            formatearRegistro(itemReg)
                        );
                        });
                    guardarData('registros',registrosBD);
                }


                
        },
        [registros]
      ); 

    const borrarSeleccionados = () => {
        if(borrarVarios.length > 0){
            let nArr = registros.filter(
                (registro) =>{
                    //devuelvo los que no estan
                    if(borrarVarios.indexOf(registro.id) < 0){
                        return formatearRegistro(registro);
                    }
                }
            );
            let accActualizaRegs = {
                accion: 2,
                objeto: nArr
            }
            actualizarRegistros(accActualizaRegs);
        }
    }

    const borrarTodo = () => {
            guardarData('registros',[]);
            let obtAccRegs = {
                accion :3
            }
            actualizarRegistros(obtAccRegs);
    }


    return(
        <>
        <View style={{backgroundColor:'#FCE0E3'}}>
        <View  style={estilos.contenedorbotonesBorrar}>
                <TouchableOpacity
                    onPress={borrarSeleccionados}
                >
                    <View
                        style={[estilos.infoBotonBorrar,{opacity:1.0}]}
                    >   
                        <View style={estilos.flex2center}>
                            <Text numberOfLines={2} adjustsFontSizeToFit style={[estilos.textoRegistro,{fontSize:15}]}>
                                Borrar Seleccion
                            </Text>
                        </View>
                        <View style={estilos.flex1center}>
                            <File size={40} mood="ko" color="#ADDFEC" />
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={borrarTodo}
                >
                    <View
                        style={estilos.infoBotonBorrar}
                    >   
                        <View style={estilos.flex2center}>
                            <Text numberOfLines={2} adjustsFontSizeToFit style={[estilos.textoRegistro,{fontSize:15}]}>
                                Borrar Todos
                            </Text>
                        </View>
                        <View style={estilos.flex1center}>
                            <File size={40} mood="ko" color="#ADDFEC" />
                        </View>

                    </View>                    
                </TouchableOpacity>

            </View>
        </View>

        
            <View style = {estilos.fondoRegistro}>

            <FlatList
                    data={registros}
                    renderItem={ ({item}) => 
                        <Registro 
                            registro={item} 
                            borrarVarios = {borrarVarios}
                            setBorrarVarios = {setBorrarVarios}
                        />
                    }
            />

            </View>
            <BotonMenu/>


        </>
    );
}

export default PantallaRegistro;

