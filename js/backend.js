
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-SERVICE.js";

const firebaseConfig = {
    apiKey: "AIzaSyDMZLjg0oUx2sfXbGBbh--ENbh_JB_cs1Y",
    authDomain: "tujkdojihospital.firebaseapp.com",
    // databaseURL: "https://tujkdojihospital-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tujkdojihospital",
    storageBucket: "tujkdojihospital.appspot.com",
    messagingSenderId: "850099033225",
    appId: "1:850099033225:web:a6859b838075196efe2258"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

var singupButton = document.getElementById('singup')



singupButton.addEventListener('click', (e) => {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneNo = document.getElementById('phoneNo').value;
    var aadharNo = document.getElementById('aadharNo').value;
    var address = document.getElementById('address').value;
    var password = document.getElementById('password').value;
    if (password != document.getElementById('repassword').value) {
        alert("Please Renter Password");
    }
    else {

        db.ref('/users/' + phoneNo).set({
            username: name,
            email: email,
            aadhar: aadharNo,
            phoneNo: phoneNo,
            email: email,
            address: address,
            password: password,
        });
        alert("i am in")
    }
});
