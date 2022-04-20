import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const useStorage = () => {

    const formatearRegistro = (valor) => {
        console.log(valor);
        try{
            let jsonValue = JSON.stringify(valor);
            let objFromJSON = JSON.parse(jsonValue);
            objFromJSON.emote.key = valor.emoteKey;
            return objFromJSON;
        }catch (e){
            
        }

        
    }

    const guardarData = async (llave,valor) => {  
        try {    
            const jsonValue = JSON.stringify(valor);
            await AsyncStorage.setItem(llave, jsonValue);
            console.log("Data guardada");
        } catch (e) {    
            // saving error  
        }
    }


    const obtenerData = async (llave) => {
        try {
            const jsonValue = await AsyncStorage.getItem(llave);
            return JSON.parse(jsonValue);
        } catch(e) {
          // error reading value
        }
    }

    return {
        guardarData,
        obtenerData,
        formatearRegistro
    }

}

export default useStorage;


  