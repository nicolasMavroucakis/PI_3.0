import React, { createContext, useState, useEffect, Dispatch, SetStateAction, ReactNode, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Tipo específico para o estado do usuário
interface UsuarioType {
    nome: string;
    e_mail: string;
    altura: string;
    peso: string;
    nascimento: string; // Data de nascimento no formato DD/MM/YYYY
    idade: number;
    imc: number;
    classIMC: string; // Novo campo para a classificação do IMC
}

interface GlobalContextType {
    medicacao: any[];
    setMedicacao: Dispatch<SetStateAction<any[]>>;
    usuario: UsuarioType;
    setUsuario: (usuario: Partial<UsuarioType>) => void;
    modoEscuro: boolean;
    setModoEscuro: Dispatch<SetStateAction<boolean>>;
    consulta: any[];
    setConsulta: Dispatch<SetStateAction<any[]>>;
}

export const GlobalContext = createContext<GlobalContextType>({
    medicacao: [],
    setMedicacao: () => {},
    usuario: {
        nome: "",
        e_mail: "",
        altura: "",
        peso: "",
        nascimento: "",
        idade: 0,
        imc: 0,
        classIMC: ""
    },
    setUsuario: () => {},
    modoEscuro: false,
    setModoEscuro: () => {},
    consulta: [],
    setConsulta: () => {}
});

export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [medicacao, setMedicacao] = useState<any[]>([]);
    const [usuario, setUsuario] = useState<UsuarioType>({
        nome: "",
        e_mail: "",
        altura: "",
        peso: "",
        nascimento: "",
        idade: 0,
        imc: 0,
        classIMC: ""
    });
    const [modoEscuro, setModoEscuro] = useState<boolean>(false);
    const [consulta, setConsulta] = useState<any[]>([]);

    // Função para calcular a idade com base na data de nascimento no formato DD/MM/YYYY
    const calcularIdade = (nascimento: string): number => {
        const [dia, mes, ano] = nascimento.split('/').map(Number);
        const hoje = new Date();
        const dataNascimento = new Date(ano, mes - 1, dia); // Mês é zero-indexado em JavaScript
        let idade = hoje.getFullYear() - dataNascimento.getFullYear();
        const diferencaMes = hoje.getMonth() - dataNascimento.getMonth();
        if (diferencaMes < 0 || (diferencaMes === 0 && hoje.getDate() < dataNascimento.getDate())) {
            idade--;
        }
        return idade;
    };

    // Função para calcular o IMC com base na altura (em metros) e no peso (em kg)
    const calcularIMC = (altura: string, peso: string): number => {
        const alturaMetros = parseFloat(altura);
        const pesoKg = parseFloat(peso);
        if (alturaMetros && pesoKg) {
            return parseFloat((pesoKg / (alturaMetros * alturaMetros)).toFixed(2));
        }
        return 0;
    };

    // Função para classificar o IMC
    const classificarIMC = (imc: number): string => {
        if (imc < 18.5) return "Abaixo do peso";
        if (imc >= 18.5 && imc < 24.9) return "Peso normal";
        if (imc >= 25 && imc < 29.9) return "Sobrepeso";
        if (imc >= 30 && imc < 34.9) return "Obesidade grau I";
        if (imc >= 35 && imc < 39.9) return "Obesidade grau II";
        return "Obesidade grau III";
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
                    const imc = calcularIMC(parsedUsuario.altura, parsedUsuario.peso);
                    setUsuario({
                        ...parsedUsuario,
                        idade: calcularIdade(parsedUsuario.nascimento),
                        imc,
                        classIMC: classificarIMC(imc)
                    });
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
        setUsuario((prevUsuario) => ({
            ...prevUsuario,
            idade: calcularIdade(prevUsuario.nascimento)
        }));
    }, [usuario.nascimento]);

    useEffect(() => {
        const imc = calcularIMC(usuario.altura, usuario.peso);
        setUsuario((prevUsuario) => ({
            ...prevUsuario,
            imc,
            classIMC: classificarIMC(imc)
        }));
    }, [usuario.altura, usuario.peso]);

    return (
        <GlobalContext.Provider value={{
            medicacao,
            setMedicacao,
            usuario,
            setUsuario: (updates: Partial<UsuarioType>) => setUsuario((prev) => ({ ...prev, ...updates })),
            modoEscuro,
            setModoEscuro,
            consulta,
            setConsulta
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
