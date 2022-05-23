import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyBtUvu8JTig_QQuAc6TKw5yqdZkozZmKGw",
    authDomain: "chat-react-a4f7d.firebaseapp.com",
    projectId: "chat-react-a4f7d",
    storageBucket: "chat-react-a4f7d.appspot.com",
    messagingSenderId: "844637547828",
    appId: "1:844637547828:web:309f2ad94a9e5c767b0961",
    measurementId: "G-JLG90CY3Y1"
  }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

