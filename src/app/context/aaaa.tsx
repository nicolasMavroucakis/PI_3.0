import React, { createContext, useState, useEffect, Dispatch, SetStateAction, ReactNode } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Usuario {
    nome: string;
    e_mail: string;
    altura: string;
    peso: string;
    nascimento: string;
    idade?: number;
}

interface GlobalContextType {
    medicacao: any[];
    setMedicacao: Dispatch<SetStateAction<any[]>>;
    usuario: Usuario;
    setUsuario: Dispatch<SetStateAction<Usuario>>;
    modoEscuro: boolean;
    setModoEscuro: Dispatch<SetStateAction<boolean>>;
}

export const GlobalContext = createContext<GlobalContextType>({
    medicacao: [],
    setMedicacao: () => {},
    usuario: {
        nome: "Gustavo Perez",
        e_mail: "gustavo.perez@gmail.com",
        altura: "1.85",
        peso: "65",
        nascimento: "1995-05-10",
        idade: 0
    },
    setUsuario: () => {},
    modoEscuro: false,
    setModoEscuro: () => {}
});

export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [medicacao, setMedicacao] = useState<any[]>([]);
    const [usuario, setUsuario] = useState<Usuario>({
        nome: "Gustavo Perez",
        e_mail: "gustavo.perez@gmail.com",
        altura: "1.85",
        peso: "65",
        nascimento: "1995-05-10",
        idade: 0
    });
    const [modoEscuro, setModoEscuro] = useState<boolean>(false);

    const calcularIdade = (dataNascimento: string): number => {
        const hoje = new Date();
        const nascimento = new Date(dataNascimento);
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mes = hoje.getMonth() - nascimento.getMonth();
        if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
            idade--;
        }
        return idade;
    };

    useEffect(() => {
        const loadAsyncData = async () => {
            try {
                const savedMedicacao = await AsyncStorage.getItem('medicacao');
                if (savedMedicacao) {
                    setMedicacao(JSON.parse(savedMedicacao));
                }

                const savedUsuario = await AsyncStorage.getItem('usuario');
                if (savedUsuario) {
                    const parsedUsuario = JSON.parse(savedUsuario);
                    if (parsedUsuario.nascimento) {
                        parsedUsuario.nascimento = new Date(parsedUsuario.nascimento).toISOString().split('T')[0];
                        parsedUsuario.idade = calcularIdade(parsedUsuario.nascimento);
                    }
                    setUsuario(parsedUsuario);
                }

                const savedModoEscuro = await AsyncStorage.getItem('modoEscuro');
                if (savedModoEscuro) {
                    setModoEscuro(JSON.parse(savedModoEscuro));
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
            } catch (error) {
                console.error('Erro ao salvar dados no AsyncStorage:', error);
            }
        };

        saveAsyncData();
    }, [medicacao, usuario, modoEscuro]);

    useEffect(() => {
        const idade = calcularIdade(usuario.nascimento);
        setUsuario(prevUsuario => ({ ...prevUsuario, idade }));
    }, [usuario.nascimento]);

    return (
        <GlobalContext.Provider value={{ medicacao, setMedicacao, usuario, setUsuario, modoEscuro, setModoEscuro }}>
            {children}
        </GlobalContext.Provider>
    );
};
