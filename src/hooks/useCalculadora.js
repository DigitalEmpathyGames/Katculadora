import React, { useContext, useEffect, useRef, useState } from 'react';
import { ContextoCreate } from '../context/CatculadoraContext';
import useEmotes from '../hooks/useEmotes';
import useStorage from '../hooks/useStorage';
const useCalculadora = () =>{
    
    const [numeroAnterior,setNumeroAnterior] = useState('0');
    const [resultado,setResultado] = useState('0');
    const [simbolo,setSimbolo] = useState('');
    const ultimaOperacion = useRef();
    const {guardarData,formatearRegistro} = useStorage();

    const {registros,actualizarRegistros} = useContext(ContextoCreate);
    const [permitirGuardado,setPermitirGuardado] = useState(false);
    useEffect(
        () => {

                    if(permitirGuardado){
                        let registrosAux = registros.map((itemReg) => {
                            return (
                                itemReg
                            );
                            });

                        registrosAux = registrosAux.flat();
                        let registrosBD = registrosAux.map((itemReg) => {
                            return (
                                formatearRegistro(itemReg)
                            );
                            });
                        guardarData('registros',registrosBD);
                        setPermitirGuardado(false);
                    }




        },
        [registros]
      );


    const {obtenerEmote} = useEmotes();

    const limpiar = () => {
        setResultado('0');
        setNumeroAnterior('0');
    };

    const armarNumero = (numeroTexto)=>{

        //max 8 numeros
        if(resultado.length == 8){
            return;
        }
        //no doble punto
        if(numeroTexto === '.'){
           if(resultado.includes('.')){
                return;
           }else{
                setResultado(resultado + numeroTexto);
           }
            
        }

        if( resultado.startsWith('0') ){
            if(resultado.length == 1 && numeroTexto === '0'){
                return;
            }else if(numeroTexto !== '.' && resultado.length == 1){
                setResultado(numeroTexto);
            }else{
                setResultado(resultado + numeroTexto);
            }
        }else if(resultado.startsWith('-0')){
            if(resultado.length == 2 && numeroTexto === '0'){
                return;
            }else if(numeroTexto !== '.' && resultado.length == 2){
                setResultado( '-' + numeroTexto);
            }else{
                setResultado(resultado + numeroTexto);
            }
        } else {
            setResultado(resultado + numeroTexto);
        }   
    };

    const setsigno = ()=>{
        if(resultado.includes('-')){
            setResultado(resultado.replace('-',''));
        }else{
            setResultado('-' + resultado);
        }
    };

    const borrar = () =>{
        let negativo = '';
        let numeroTemp = resultado;
        if(resultado.includes('-')){
            negativo = '-'
            numeroTemp = resultado.substring(1);
        }

        if (numeroTemp.length > 1){
            setResultado(negativo + numeroTemp.slice(0,-1));
        }else{
            setResultado('0');
        }
    }

    const cambiarNumPorAnterior = () => {
        if(numeroAnterior.endsWith('.')){
            setNumeroAnterior(resultado.slice(0,-1));
        }else{
            setNumeroAnterior(resultado);
        }
        setResultado('0');
    }

    const dividir = () => {
        setSimbolo('/');
        cambiarNumPorAnterior();
        ultimaOperacion.current = 'dividir';
    }
    const multiplicar = () => {
        setSimbolo('X');
        cambiarNumPorAnterior();
        ultimaOperacion.current = 'multiplicar';
    }
    const restar = () => {
        setSimbolo('-');
        cambiarNumPorAnterior();
        ultimaOperacion.current = 'restar';
    }
    const sumar = () => {
        setSimbolo('+');
        cambiarNumPorAnterior();
        ultimaOperacion.current = 'sumar';
    }

    const calcular = () => {
        setSimbolo('');
        const num1 = Number(resultado);
        const num2 = Number(numeroAnterior);
        let signo = '';
        let resultadoOperacion ;
        switch(ultimaOperacion.current){
            case 'sumar':
                resultadoOperacion = num1 + num2;
                setResultado(`${num1 + num2}`);
                signo = ' + ';
                break;
            case 'restar':
                resultadoOperacion = num2 - num1;
                setResultado(`${num2 - num1}`);
                signo = ' - ';
                break;
            case 'multiplicar':
                resultadoOperacion = num1 * num2;
                setResultado(`${num1 * num2}`);
                signo = ' x ';
                break;
            case 'dividir':
                resultadoOperacion = num2 / num1;
                setResultado(`${num2 / num1}`);
                signo = ' / ';
                break;
            default:
                break;
        }

        if(num1 != 0 || num2 != 0){
            //obtenemos los registros
            let obtReg = registros.map(
                (registro) => {
                    return registro;
                }
            );
            //crear nuevo registro
            let fechas = ObtenerFecha();
            let emoteItem = obtenerEmote();
            let nuevoRegistro = {
                id : fechas.paraId,
                fecha: fechas.fecha,
                operacion : num2 + signo + num1,
                resultado : resultadoOperacion,
                emote : emoteItem.emote,
                emoteKey : emoteItem.key
            }
            //agregar nuevo registro
            obtReg.push(nuevoRegistro);
            //formatear registros
            let registrosBD = obtReg.map((itemReg) => {
                return (
                    formatearRegistro(itemReg)
                );
                });
            
            //guardar registro en bd
            guardarData('registros',registrosBD);
            //actualizar registros
            let objActualizaReg = {
                accion: 2,
                objeto: obtReg
            }
            actualizarRegistros(objActualizaReg);
        }
        

        setNumeroAnterior('0');

    }

    return {
        numeroAnterior,
        resultado,
        limpiar,
        setsigno,
        borrar,
        dividir,
        armarNumero,
        multiplicar,
        restar,
        sumar,
        calcular,
        simbolo
    }

}

export default useCalculadora;

const ObtenerFecha=()=>{

    let fecha = new Date();

    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let year = fecha.getFullYear();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let miliSegundos = fecha.getMilliseconds();

    let fechas = {
        paraId : dia + '-' + mes + '-' + year + ' ' + hora + ':' + minutos + ':' + segundos + ':' + miliSegundos,
        fecha : dia + '-' + mes + '-' + year + ' ' + hora + ':' + minutos + ':' + segundos
    }
    return fechas;

}

