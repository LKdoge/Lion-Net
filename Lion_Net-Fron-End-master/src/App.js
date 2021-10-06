import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import NavBar from './NavBar/NavBar';
import HomePage from './HomePage/HomePage';
import Habitats from './Habitats/Habitats';
import AboutUs from './AboutUs/AboutUs';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvMcLjt7eA2vOPaIPh_wh6Zbr20osI5LE",
  authDomain: "lionnet-c5128.firebaseapp.com",
  projectId: "lionnet-c5128",
  storageBucket: "lionnet-c5128.appspot.com",
  messagingSenderId: "404862648826",
  appId: "1:404862648826:web:697a83c57a6bcb1a44e443",
  measurementId: "G-8NTH1TC2WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <>
      <NavBar />  
        <Router>
          <Switch>
            {/* <Route exact path="/" component={HomePage}></Route> */}
            <Route exact path="/" component={Habitats}></Route>
            <Route exact path="/aboutus" component={AboutUs}></Route>
          </Switch>
        </Router>
     
    </>
  );
}

export default App;