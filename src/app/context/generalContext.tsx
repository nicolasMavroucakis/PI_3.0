import React, { createContext, useState, Dispatch, SetStateAction, ReactNode, useEffect } from 'react';

interface Medicamento {
    hora: string
    nome: string
    quantidade: string
    alarme: boolean
    discricao: string
    grande: boolean
    key: string
}

interface MedicacaoContextType {
    medicacao: Medicamento[]
    setMedicacao: Dispatch<SetStateAction<Medicamento[]>>
}

const MedicacaoContext = createContext<MedicacaoContextType>({
    medicacao: [],
    setMedicacao: () => {}
});

interface MedicacaoProviderProps {
    children: ReactNode
}

const MedicacaoProvider: React.FC<MedicacaoProviderProps> = ({ children }) => {
    const [medicacao, setMedicacao] = useState<Medicamento[]>([]);
    useEffect(() => {
        console.log("Medicação atualizada:", medicacao);
    }, [medicacao]);

    return (
        <MedicacaoContext.Provider value={{ medicacao, setMedicacao }}>
            {children}
        </MedicacaoContext.Provider>
    );
};

export { MedicacaoContext, MedicacaoProvider }
