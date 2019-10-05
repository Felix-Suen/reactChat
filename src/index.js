import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
    apiKey: "AIzaSyBrjbTfzH0Z051_sqGrPZSBIj_qxd3IiOc",
    authDomain: "putato-e9283.firebaseapp.com",
    databaseURL: "https://putato-e9283.firebaseio.com",
    projectId: "putato-e9283",
    storageBucket: "putato-e9283.appspot.com",
    messagingSenderId: "386130373652",
    appId: "1:386130373652:web:c127e5b595ce4f1a404b01",
    measurementId: "G-7MGJB2BZ3G"
});

const routing = (
    <Router>
        <div id="routing-container">
            <Route path="/login" component={LoginComponent}></Route>
            <Route path="/signup" component={SignupComponent}></Route>
            <Route path="/dashboard" component={DashboardComponent}></Route>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
