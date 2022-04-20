import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    fondo:{
        flex: 1,
        backgroundColor: '#D6EFF6'
    },
    fondoRegistro:{
        flex: 1,
        backgroundColor: '#FCE0E3'
    },
    textoMenu:{
        fontSize:30,
        color:'white',
        fontWeight: 'bold',
        textShadowColor:'black'

    },
    textoRegistro:{
        fontSize:20,
        color:'white',
        fontWeight: 'bold',
        textShadowColor:'black'
    },
    itemRegistro:{
        backgroundColor: '#ADDFEC',
        borderWidth:5,
        borderColor:'white',
        borderRadius:10,
        marginBottom:10,
        flexDirection:'row'
    },
    contenedorBorrar:{
        backgroundColor: '#FEAEA5',
        borderWidth:5,
        borderColor:'white',
        borderRadius:10,
        marginBottom:10,
        flexDirection:'row',
        position:'absolute',
        marginVertical:5
    },
    itemMenu:{
        backgroundColor: '#B0ABCB',
        borderWidth:5,
        borderColor:'white',
        borderRadius:10,
        marginBottom:10,
        flexDirection:'row'
    },
    calculadoraContainer:{
        flex:1,
        paddingHorizontal:20,
        justifyContent:'flex-end',
        backgroundColor: '#D6EFF6'
    },
    pantalla:{
        backgroundColor: '#C2D5A8',
        borderWidth:5,
        borderColor:'white',
        borderRadius:30,
        minHeight:120,  
        maxHeight:120    
    },
    simbolo:{
        height:40,
        width:40,
        backgroundColor:'#F0D5BA',
        borderRadius:100,
        justifyContent: 'center',
        borderWidth:5,
        borderColor:'white',
        marginHorizontal:3,
        position:'absolute',
        marginVertical:40
    },
    textoSimbolo:{
        fontSize:30,
        left:5,
        bottom:5,
        textAlignVertical:'center',
        color:'white',
        fontWeight: 'bold'
    },
    resultado:{
        color: 'white',
        fontSize : 50,
        textAlign:'right'
    },
    miniResultado:{
        color: 'rgba(255,255,255,0.7)',
        fontSize : 30,

        textAlign:'right'
    },
    boton:{
        height:80,
        width:80,
        backgroundColor:'#F3B1CD',
        borderRadius:100,
        justifyContent: 'center',
        borderWidth:5,
        borderColor:'white',
        marginHorizontal:10
    },
    textoBoton:{
        textAlign:'center',
        padding:10,
        fontSize:30,
        color:'white',
        fontWeight: 'bold'
    },
    fila:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:2,
        paddingHorizontal:10
    },
    contenedorbotonesBorrar:{
        height:70,
        left:90,
        marginVertical:10,
        flexDirection:'row'
    },
    infoBotonBorrar:{
        backgroundColor: '#FEAEA5',
        borderWidth:5,
        borderColor:'white',
        borderRadius:10,
        marginBottom:10,
        height:'100%',
        width:150,
        marginLeft:5,
        flexDirection:'row'
    },
    flex2center:{
        flex:2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex1center:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default estilos;