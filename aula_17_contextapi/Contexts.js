import React, { createContext } from "react";

const UsuarioContext = createContext({});

export const UsuarioProvider = ({ children }) => {
    const usuario = {
        contexto: "Contexto de Usuário",
        nome: "João",
        idade: 25,
        curso: "Tecnologia em Analise e Desenvolvimento de Sistemas",
        disciplina: "Programação para Dispositivos Móveis II",
        ano: 2023
    };

    return (
        <UsuarioContext.Provider value={ usuario }>
            {children}
        </UsuarioContext.Provider>
    );
}

export default UsuarioContext;
