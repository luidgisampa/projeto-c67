import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
apiKey: "AIzaSyC_NYwaUJT4NW0OFlfetrTICXvVKRQ8JpU",
  authDomain: "app-de-votacao-9bf9f.firebaseapp.com",
  databaseURL: "https://app-de-votacao-9bf9f-default-rtdb.firebaseio.com",
  projectId: "app-de-votacao-9bf9f",
  storageBucket: "app-de-votacao-9bf9f.appspot.com",
  messagingSenderId: "124612679039",
  appId: "1:124612679039:web:7bd561ac39fb58aa26f64a"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();