import  firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBGwkEKFqf59hMnszzdgJkeXScqR7Ik5OQ",
  authDomain: "react-crud-9a226.firebaseapp.com",
  databaseURL: "https://react-crud-9a226-default-rtdb.firebaseio.com",
  projectId: "react-crud-9a226",
  storageBucket: "react-crud-9a226.appspot.com",
  messagingSenderId: "770451959774",
  appId: "1:770451959774:web:b39d8aae55b650974f774f"

};
// Initialize Firebase
var baseDb=firebase.initializeApp(firebaseConfig);

export default baseDb.database().ref();