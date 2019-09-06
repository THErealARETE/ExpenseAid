 import * as firebase from 'firebase';
  
  /*apiKey: "AIzaSyDr6r5KplLfXa-RHdmhvnLPR4b6Bv7OKqg",
    authDomain: "expensify-test-af839.firebaseapp.com",
    databaseURL: "https://expensify-test-af839.firebaseio.com",
    projectId: "expensify-test-af839",
    storageBucket: "expensify-test-af839.appspot.com",
    messagingSenderId: "1042373514101",
    appId: "1:1042373514101:web:27e0d55418074e9f" */
    
//CRUD with firebase
 
const Config = {
    apiKey: "AIzaSyC3RIG0-3-3XW7iwXSdgEeMKx7PFVFjZf8",
    authDomain: "expensify-98e91.firebaseapp.com",
    databaseURL: "https://expensify-98e91.firebaseio.com",
    projectId: "expensify-98e91",
    storageBucket: "expensify-98e91.appspot.com",
    messagingSenderId: "372123841309",
    appId: "1:372123841309:web:9d0d2a9f5a69508c"
  };

  firebase.initializeApp(Config)

  const database = firebase.database()

  export{firebase, database as default}
//   database.ref().set({
//       name: 'Amuzu Pelumi',
//       age: 26,
//       isSingle: false,
//       location:{
//           city: 'Lagos',
//           country: 'Nigeria' 
//       }
//   }).then(()=>{
//       console.log('data is saved')
//   }).catch((e)=>{
//       console.log('This is failed', e)
//   })

//   //database.ref().set('This is my data.') 

//   //.ref('age').set(27) 

//   //database.ref('location/city').set('uyo')

//   database.ref('attributes').set({
//     attributes:{
//         height: 23,
//         weight: 44 
//     }
//   }).then(()=>{
//       console.log('data is saved')  
//   }).catch((e)=>{
//       console.log('this failed',e )
//   })


// // this helps to delete data with remove()
//   database.ref('isSingle').remove().then(()=>{
//       console.log('Data was removed')
//   }).catch((e)=>{
//       console.log('did not remove data', e)
//   })

//   //this helps to delete data with set()

//   //database.ref('isSingle).set(null)

//   //we can also update using the update()
//   //do practice task in update call 

//   // manipulations with setTimeOut()
//   //unsuscribing using the off method & unsuscribing once 
//   // practice excercise 


// database.ref('notes').push({
//     club: 'liverpool',
//    players: '...pepe'
// })
// database.ref('notes').push({
//     club: 'spurs',
//    players: 'ndobele'
// })
// database.ref('notes').push({
//     club: 'man u ',
//    players: 'david james'
// })
// database.ref('notes/-LiQBXra3NK9xLLuuH5e').remove()
// database.ref('notes/-LiQBGhs00VheF7TAF1o').remove()


// using once to fetch data from firebase
//  database.ref('notes').once('value').then((snapshot)=>
//  {
//      const notes = []

//      snapshot.forEach((childSnapshot)=>{
//          notes.push({
//              id: childSnapshot.key,
//              ...childSnapshot.val()
//          })
//      })
//      console.log(notes)
//  })

//usiung on to fetch updated data from firebase, takes in two arguments--- 
//child_removed//child_changed/// CHILD_ADDED 
// database.ref('notes').on('value', (snapshot)=>{

//     const notes = []

//      snapshot.forEach((childSnapshot)=>{
//          notes.push({
//              id: childSnapshot.key,
//              ...childSnapshot.val()
//          })
//      })
//      console.log(notes)
// })
