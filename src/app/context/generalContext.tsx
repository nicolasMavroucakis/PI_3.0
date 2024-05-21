import React, { createContext, useState, Dispatch, SetStateAction, ReactNode, useContext } from 'react';

interface Medicamento {
    hora: string;
    nome: string;
    quantidade: string;
    alarme: boolean;
    discricao: string;
    grande: boolean;
    key: string;
}

interface Usuario {
    nome: string;
    e_mail: string;
    altura: string;
    peso: string;
    nascimento: string;
}

interface ModoEscuro {
    modoEscuro: boolean;
}

interface MedicacaoContextType {
    medicacao: Medicamento[];
    setMedicacao: Dispatch<SetStateAction<Medicamento[]>>;
}

interface UsuarioContextType {
    usuario: Usuario;
    setUsuario: Dispatch<SetStateAction<Usuario>>;
}

interface ModoEscuroContextType {
    modoEscuro: ModoEscuro;
    setModoEscuro: Dispatch<SetStateAction<ModoEscuro>>;
}

const MedicacaoContext = createContext<MedicacaoContextType>({
    medicacao: [],
    setMedicacao: () => {}
});

const UsuarioContext = createContext<UsuarioContextType>({
    usuario: { nome: "", e_mail: "", altura: "", peso: "", nascimento: "" },
    setUsuario: () => {}
});

const ModoEscuroContext = createContext<ModoEscuroContextType>({
    modoEscuro: { modoEscuro: true },
    setModoEscuro: () => {}
});

interface MedicacaoProviderProps {
    children: ReactNode;
}

interface UsuarioProviderProps {
    children: ReactNode;
}

interface ModoEscuroProviderProps {
    children: ReactNode;
}

const MedicacaoProvider: React.FC<MedicacaoProviderProps> = ({ children }) => {
    const [medicacao, setMedicacao] = useState<Medicamento[]>([]);
    // useEffect(() => {
    //     console.log("Medicação atualizada:", medicacao);
    // }, [medicacao]);

    return (
        <MedicacaoContext.Provider value={{ medicacao, setMedicacao }}>
            {children}
        </MedicacaoContext.Provider>
    );
};

const UsuarioProvider: React.FC<UsuarioProviderProps> = ({ children }) => {
    const [usuario, setUsuario] = useState<Usuario>({ nome: "Gusatvo Perez", e_mail: "gustavo.perez@gmail.com", altura: "1.85", peso: "65", nascimento: "10/05/1995" });

    return (
        <UsuarioContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UsuarioContext.Provider>
    );
};

const ModoEscuroProvider: React.FC<ModoEscuroProviderProps> = ({ children }) => {
    const [modoEscuro, setModoEscuro] = useState<ModoEscuro>({ modoEscuro: true });

    return (
        <ModoEscuroContext.Provider value={{ modoEscuro, setModoEscuro }}>
            {children}
        </ModoEscuroContext.Provider>
    );
};

export { MedicacaoContext, MedicacaoProvider, UsuarioContext, UsuarioProvider, ModoEscuroContext, ModoEscuroProvider };
