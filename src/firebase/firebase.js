
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAD8-Huc9Z_YtEWHthare_CGwdxdynS1yE",
    authDomain: "expensify-4a804.firebaseapp.com",
    databaseURL: "https://expensify-4a804-default-rtdb.firebaseio.com",
    projectId: "expensify-4a804",
    storageBucket: "expensify-4a804.appspot.com",
    messagingSenderId: "1069126107367",
    appId: "1:1069126107367:web:27b44d01ebdbfa64cd6242",
    measurementId: "G-CNCEBNP8SZ"
  };  


   initializeApp(firebaseConfig);
   
   const db = getDatabase();

   set(ref(db, 'users/' + 6), {
     username: "towhid",
     email: 'email', 
     profile_picture : 'imageUrl'
   });

   set(ref(db, 'users/6/username'),{
    username:''
   })


// function writeUserData(userId, name, email, imageUrl) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email, 
//     profile_picture : imageUrl
//   });
// }

// writeUserData(1, 'bbbbbbb', 'aaa', '113qwadq')