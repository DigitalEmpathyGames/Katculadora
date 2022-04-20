import React from 'react';
import { Text, View } from 'react-native';
import Boton from '../componentes/Boton';
import estilos from '../tema/AppTema';
import useCalculadora from '../hooks/useCalculadora';
import BotonMenu from '../componentes/BotonMenu';



const PantallaCatculadora = () => {
    const {        
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
        simbolo} = useCalculadora();


    return(
        <>
        
        <View style= {estilos.calculadoraContainer}>

            <View style={estilos.pantalla}>

                <View style={{ marginLeft:40}}>
                    {
                        (numeroAnterior !== '0') && (
                            <Text style={estilos.miniResultado}>
                            {numeroAnterior}
                        </Text>
                        )
                    }
                    <Text numberOfLines={1} adjustsFontSizeToFit style={estilos.resultado}>
                        {resultado}
                    </Text>
                </View>

                {
                    (simbolo !== '' && numeroAnterior !== '0') && (
                        <View style={estilos.simbolo}>
                            <Text style={estilos.textoSimbolo}>
                                {simbolo}
                            </Text>
                        </View>
                    )
                }
                    


            </View>


            {/* bottones */}
            <View style={estilos.fila}>
                <Boton texto="C" color="#B0ABCB" funcion={limpiar}/>
                <Boton texto="+/-" color="#B0ABCB" funcion={setsigno}/>
                <Boton texto="bor" color="#B0ABCB" funcion={borrar}/>
                <Boton texto="/" color="#F0D5BA" funcion={dividir}/>
            </View>
            <View style={estilos.fila}>
                <Boton texto="7" color="#F3B1CD" funcion={armarNumero}/>
                <Boton texto="8" color="#F3B1CD" funcion={armarNumero}/>
                <Boton texto="9" color="#F3B1CD" funcion={armarNumero}/>
                <Boton texto="x" color="#F0D5BA"  funcion={multiplicar}/>
            </View>
            <View style={estilos.fila}>
                <Boton texto="4" color="#F3B1CD" funcion={armarNumero}/>
                <Boton texto="5" color="#F3B1CD" funcion={armarNumero}/>
                <Boton texto="6" color="#F3B1CD" funcion={armarNumero}/>
                <Boton texto="-" color="#F0D5BA" funcion={restar}/>
            </View>
            <View style={estilos.fila}>
                <Boton texto="1" color="#F3B1CD" funcion={armarNumero}/>
                <Boton texto="2" color="#F3B1CD" funcion={armarNumero}/>
                <Boton texto="3" color="#F3B1CD" funcion={armarNumero}/>
                <Boton texto="+" color="#F0D5BA" funcion={sumar}/>
            </View>
            <View style={estilos.fila}>
                <Boton texto="0" color="#F3B1CD" ancho funcion={armarNumero}/>
                <Boton texto="." color="#F3B1CD" funcion={armarNumero}/>
                <Boton texto="=" color="#F0D5BA" funcion={calcular}/>
            </View>


        </View>
        
        <BotonMenu/>

        </>
    );

}

export default PantallaCatculadora;