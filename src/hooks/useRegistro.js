import React, { useContext, useRef, useState } from 'react';
import { Animated, PanResponder } from 'react-native';
import { ContextoCreate } from '../context/CatculadoraContext';

const useRegistro = () =>{
  const [colorBorde,setColorBorde] = useState('white');
  const [borrar,setBorrar] = useState(true);
  const pan = useRef(new Animated.ValueXY()).current;
  
    return {
        pan,
        colorBorde,
        setColorBorde,
        borrar,
        setBorrar
        
    }

}

export default useRegistro;

