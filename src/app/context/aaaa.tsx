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
        idade: 0
    },
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
                    setNome(parsedUsuario.nome);
                    setEmail(parsedUsuario.e_mail);
                    setAltura(parsedUsuario.altura);
                    setPeso(parsedUsuario.peso);
                    setNascimento(parsedUsuario.nascimento);
                    setIdade(calcularIdade(parsedUsuario.nascimento));
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
                const usuario = {
                    nome,
                    e_mail,
                    altura,
                    peso,
                    nascimento,
                    idade: calcularIdade(nascimento)
                };
                await AsyncStorage.setItem('medicacao', JSON.stringify(medicacao));
                await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
                await AsyncStorage.setItem('modoEscuro', JSON.stringify(modoEscuro));
                await AsyncStorage.setItem('consulta', JSON.stringify(consulta));
            } catch (error) {
                console.error('Erro ao salvar dados no AsyncStorage:', error);
            }
        };

        saveAsyncData();
    }, [medicacao, nome, e_mail, altura, peso, nascimento, modoEscuro, consulta]);

    // Atualizar a idade sempre que a data de nascimento mudar
    useEffect(() => {
        setIdade(calcularIdade(nascimento));
    }, [nascimento]);

    // Logs de depuração para ver as mudanças nos estados
    useEffect(() => {
        console.log("Medicacao atualizada:", medicacao);
    }, [medicacao]);

    useEffect(() => {
        console.log("Usuario atualizado:", { nome, e_mail, altura, peso, nascimento, idade });
    }, [nome, e_mail, altura, peso, nascimento, idade]);

    useEffect(() => {
        console.log("Modo Escuro atualizado:", modoEscuro);
    }, [modoEscuro]);

    useEffect(() => {
        console.log("Consulta atualizada:", consulta);
    }, [consulta]);

    return (
        <GlobalContext.Provider value={{
            medicacao,
            setMedicacao,
            usuario: { nome, e_mail, altura, peso, nascimento, idade },
            setUsuario: (usuario: Partial<UsuarioType>) => {
                if (usuario.nome !== undefined) setNome(usuario.nome);
                if (usuario.e_mail !== undefined) setEmail(usuario.e_mail);
                if (usuario.altura !== undefined) setAltura(usuario.altura);
                if (usuario.peso !== undefined) setPeso(usuario.peso);
                if (usuario.nascimento !== undefined) {
                    setNascimento(usuario.nascimento);
                    setIdade(calcularIdade(usuario.nascimento));
                }
            },
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
