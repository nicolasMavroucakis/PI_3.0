import { getDatabase, ref, set } from "firebase/database";

export const updateUserData = async (userId, userData) => {
    const db = getDatabase();
    const userRef = ref(db, `users/${userId}`);
    try {
        await set(userRef, userData);
        console.log("Dados do usuário atualizados com sucesso.");
    } catch (error) {
        console.error("Erro ao atualizar dados do usuário:", error);
    }
};
