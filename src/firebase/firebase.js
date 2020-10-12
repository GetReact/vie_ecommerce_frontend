import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config  = {
    apiKey: "AIzaSyBlGnqJhVRH1ELvy-wCbceTq9B_Dp96_PU",
    authDomain: "viecommerce.firebaseapp.com",
    databaseURL: "https://viecommerce.firebaseio.com",
    projectId: "viecommerce",
    storageBucket: "viecommerce.appspot.com",
    messagingSenderId: "1053282627647",
    appId: "1:1053282627647:web:0a02f4aa21e2ce577f488a",
    measurementId: "G-BTLT7LP7GP"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData 
            });
        } catch (e) {
            console.log('error creating user', e.message);
        }
    }
    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;