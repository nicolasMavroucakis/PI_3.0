import { getDatabase, ref, get, child } from "firebase/database";

export const getUserData = async (userId) => {
    const dbRef = ref(getDatabase());
    try {
        const snapshot = await get(child(dbRef, `users/${userId}`));
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log("No data available");
            return null;
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
    }
};