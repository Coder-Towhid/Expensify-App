
import { initializeApp } from "firebase/app";
import { getDatabase, push, ref } from "firebase/database";


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
   
   export { db as default };



  push(ref(db, "Expenses/"),{
    description: 'Rent',
    note: ' ',
    amount: '10445',
    createdAt: 9888410
  })






  //  set(ref(db, 'users/' + 9), {
  //    username: "Islam",
  //    email: 'email', 
  //    profile_picture : 'imageUrl'
  //  });

  //  set(ref(db, 'users/7/username' ), 'Towhid Islam update').then(()=>{
  //   console.log("data is updated")
  //  }).catch((error)=>{
  //   console.log('this failed.', error)
  //  });

  //  remove(ref(db, 'users/6')).then(function() {
  //   console.log("Remove succeeded.")
  // })
  // .catch(function(error) {
  //   console.log("Remove failed: " + error.message)
  // })

  // const data = ref(db, 'Expenses/')
  // onValue(data, (snapshot) => {
  //   const expenses = []

  //   snapshot.forEach((childSnapshot) =>{
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     })
  //   })
  //   console.log(expenses)
  // })