
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, remove, set } from "firebase/database";


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


   set(ref(db, 'users/' + 7), {
     username: "Islam",
     email: 'email', 
     profile_picture : 'imageUrl'
   });

   set(ref(db, 'users/7/username' ), 'Towhid Islam update').then(()=>{
    console.log("data is updated")
   }).catch((error)=>{
    console.log('this failed.', error)
   });

   remove(ref(db, 'users/6')).then(function() {
    console.log("Remove succeeded.")
  })
  .catch(function(error) {
    console.log("Remove failed: " + error.message)
  })

  const data = ref(db, 'users/7')
  onValue(data, (snapshot) => {
    console.log([snapshot.val()])
  })