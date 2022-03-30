import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBw-me99XSDyaOFYHHIkal0u-QXZ0S9lVg",
  authDomain: "actividad10utch.firebaseapp.com",
  databaseURL: "https://actividad10utch-default-rtdb.firebaseio.com",
  projectId: "actividad10utch",
  storageBucket: "actividad10utch.appspot.com",
  messagingSenderId: "816423955252",
  appId: "1:816423955252:web:5bbf1b26e29a51e9131361"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {
  firebase
};