// src/services/AuthService.js
import * as Google from 'expo-auth-session/providers/google';
import * as Facebook from 'expo-facebook';
import { GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithCredential } from 'firebase/auth';
import { auth } from './firebase';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';
const FACEBOOK_APP_ID = 'YOUR_FACEBOOK_APP_ID';

export const signUpWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = async () => {
  try {
    const result = await Google.startAsync({
      clientId: GOOGLE_CLIENT_ID,
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      const { id_token } = result.params;
      const credential = GoogleAuthProvider.credential(id_token);
      const userCredential = await signInWithCredential(auth, credential);
      return userCredential;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const signInWithFacebook = async () => {
  try {
    await Facebook.initializeAsync({
      appId: FACEBOOK_APP_ID,
    });
    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile', 'email'],
    });

    if (type === 'success') {
      const credential = FacebookAuthProvider.credential(token);
      const userCredential = await signInWithCredential(auth, credential);
      return userCredential;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
