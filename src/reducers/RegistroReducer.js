const registroReducer =  (estado, nuevoregistro) => {

    let nuevoEstado;
    let accion = nuevoregistro.accion;
    let objeto = nuevoregistro.objeto;
    switch(accion){
        case 0:
            //agregar 1
            nuevoEstado = estado.map((registro) => {
                return (
                    registro
                );
                });
            nuevoEstado.push(objeto);    
            break;
        case 1:
            // borrar 1
            nuevoEstado = estado.filter(
                (registro) =>{
                    if(!objeto.includes(registro.id)){
                        return registro;
                    }
                }
            );
            break;
        case 2:
            //reemplazar con entrante
            nuevoEstado = objeto.map((registro) => {
                return (
                registro
                );
            });
            break;
        case 3:
            // borrar todo
            nuevoEstado = [];
            break;
        default:
            break;
    }
    return nuevoEstado;
}

export default registroReducer;