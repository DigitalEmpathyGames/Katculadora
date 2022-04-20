import React, { createContext, useReducer } from 'react';
import registroReducer from '../reducers/RegistroReducer';

const registrosInicial = [];

export const ContextoCreate = createContext();

export const CatculadoraContext = ({children}) =>{
    const [registros, actualizarRegistros] = useReducer(registroReducer,registrosInicial);

    return(
        <ContextoCreate.Provider
            value={{
                registros,
                actualizarRegistros
            }}
        >
            {children}
        </ContextoCreate.Provider>
    );


}