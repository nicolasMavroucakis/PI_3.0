import React, { createContext, useState, useEffect, Dispatch, SetStateAction, ReactNode, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


interface GlobalContextType {
    medicacao: any[];
    setMedicacao: Dispatch<SetStateAction<any[]>>;
    usuario: any;
    setUsuario: Dispatch<SetStateAction<any>>;
    modoEscuro: boolean;
    setModoEscuro: Dispatch<SetStateAction<boolean>>;
    consulta: any[];
    setConsulta: Dispatch<SetStateAction<any[]>>;
}

export const GlobalContext = createContext<GlobalContextType>({
    medicacao: [],
    setMedicacao: () => {},
    usuario: {},
    setUsuario: () => {},
    modoEscuro: false,
    setModoEscuro: () => {},
    consulta: [],
    setConsulta: () => {}
});

export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [medicacao, setMedicacao] = useState<any[]>([]);
    const [usuario, setUsuario] = useState<any>({
        nome: "Gustavo Perez",
        e_mail: "gustavo.perez@gmail.com",
        altura: "1.85",
        peso: "65",
        nascimento: "10/05/1995",
        idade: "45"
    });
    const [modoEscuro, setModoEscuro] = useState<boolean>(false);
    const [consulta, setConsulta] = useState<any[]>([]);

    useEffect(() => {
        const loadAsyncData = async () => {
            try {
                const savedMedicacao = await AsyncStorage.getItem('medicacao');
                if (savedMedicacao) {
                    setMedicacao(JSON.parse(savedMedicacao));
                }

                const savedUsuario = await AsyncStorage.getItem('usuario');
                if (savedUsuario) {
                    setUsuario(JSON.parse(savedUsuario));
                }

                const savedModoEscuro = await AsyncStorage.getItem('modoEscuro');
                if (savedModoEscuro) {
                    setModoEscuro(JSON.parse(savedModoEscuro));
                }

                const savedConsulta = await AsyncStorage.getItem('consulta');
                if (savedConsulta) {
                    setConsulta(JSON.parse(savedConsulta));
                }
            } catch (error) {
                console.error('Erro ao carregar dados do AsyncStorage:', error);
            }
        };

        loadAsyncData();
    }, []);

    useEffect(() => {
        const saveAsyncData = async () => {
            try {
                await AsyncStorage.setItem('medicacao', JSON.stringify(medicacao));
                await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
                await AsyncStorage.setItem('modoEscuro', JSON.stringify(modoEscuro));
                await AsyncStorage.setItem('consulta', JSON.stringify(consulta));
            } catch (error) {
                console.error('Erro ao salvar dados no AsyncStorage:', error);
            }
        };

        saveAsyncData();
    }, [medicacao, usuario, modoEscuro, consulta]);

    useEffect(() => {
        console.log("Medicacao atualizada:", medicacao);
    }, [medicacao]);

    useEffect(() => {
        console.log("Usuario atualizado:", usuario);
    }, [usuario]);

    useEffect(() => {
        console.log("Modo Escuro atualizado:", modoEscuro);
    }, [modoEscuro]);

    useEffect(() => {
        console.log("Consulta atualizada:", consulta);
    }, [consulta]);

    return (
        <GlobalContext.Provider value={{ medicacao, setMedicacao, usuario, setUsuario, modoEscuro, setModoEscuro, consulta, setConsulta }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
