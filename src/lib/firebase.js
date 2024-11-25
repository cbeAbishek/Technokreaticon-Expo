import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
};

export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth();
