import React, { createContext, useState } from 'react';

const MedicacaoContext = createContext()

const MedicacaoProvider = ({ children }) => {
    const [medicacao, setMedicacao] = useState([
        { hora: "8:00", nome: "Losartana", quantidade: "150ml", alarme: true, discricao: "Remédio de uso anal", grande: false },
        { hora: "8:00", nome: "Losartana", quantidade: "150ml", alarme: true, discricao: "Remédio de uso anal", grande: true },
        { hora: "8:00", nome: "Losartana", quantidade: "150ml", alarme: true, discricao: "Remédio de uso anal", grande: true }
    ]);

    return (
        <MedicacaoContext.Provider value={{ medicacao, setMedicacao }}>
            {children}
        </MedicacaoContext.Provider>
    );
};

export { MedicacaoContext, MedicacaoProvider };