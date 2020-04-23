import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDFNFrdXY9sF8efD9WOgY_Mfs4IPnWURoM',
  authDomain: 'clothingdb-b623a.firebaseapp.com',
  databaseURL: 'https://clothingdb-b623a.firebaseio.com',
  projectId: 'clothingdb-b623a',
  storageBucket: 'clothingdb-b623a.appspot.com',
  messagingSenderId: '842699672090',
  appId: '1:842699672090:web:dd7235580629d7ca90dfa3',
  measurementId: 'G-VDWFL566T8',
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
        ...additionalData,
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
