import { auth } from "../../firebaseConfig";

export const getAccesToken = async () => {
    return auth.currentUser.getIdToken()
}