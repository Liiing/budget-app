import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

function login() {
    var userName = window.prompt;
    var password = window.prompt;
    var databankName = userName;
    var passwordDB = password;
    if (userName.localeCompare(databankName)) {
        checkPassword();

    } else {
        <p>Username does not exist</p>
    }
}

function checkPassword(password, passwordDB) {
    if (password.localeCompare(passwordDB)) {
        openDashboard();
    } else {
        password = window.prompt("Your password was incorrect. Please try again.");
        checkPassword(password, passwordDB);
    }
}
module.exports = login;
module.exports = checkPassword;
