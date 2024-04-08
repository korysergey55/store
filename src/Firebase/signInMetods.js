import firebase from 'firebase/compat/app';
import { auth, db } from './firebase';
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';
import 'firebase/auth';

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    if (res) {
      toast.success('You was successfully Login!', {
        theme: 'colored',
      });
    }
    return res;
  } catch (err) {
    toast.error(`${err.message}`, {
      theme: 'colored',
    });
  }
};
const signInWithFacebook = async () => {
  try {
    const res = await auth.signInWithPopup(facebookProvider);
    return res;
  } catch (err) {
    toast.error(`${err.message}`, {
      theme: 'colored',
    });
  }
};
const signInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await auth.signInWithEmailAndPassword(email, password);
    if (res) {
      toast.success('You was successfully Login!', {
        theme: 'colored',
      });
    }
    return res;
  } catch (err) {
    toast.error(`${err.message}`, {
      theme: 'colored',
    });
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    if (res) {
      toast.success('You was successfully registered. Login please!', {
        theme: 'colored',
      });
    }
    const user = res.user;
    await db.collection('users').add({
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    toast.error(`${err.message}`, {
      theme: 'colored',
    });
  }
};
const sendPasswordResetEmail = async (email, navigate) => {
  try {
    const response = await auth.sendPasswordResetEmail(email);
    toast('Password reset link sent! Check your email!', {
      theme: 'colored',
    });
    return response;
  } catch (err) {
    toast.error(`${err.message}`, {
      theme: 'colored',
    });
  }
};

const logout = () => {
  auth.signOut();
  toast.success('signOut success!', {
    theme: 'colored',
  });
};

export {
  signInWithGoogle,
  logout,
  signInWithFacebook,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
};
