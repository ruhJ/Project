document.body.style.backgroundImage = "url('images/background.jpg')"
document.body.style.backgroundPosition = "center"
document.body.style.backgroundSize = "cover"



function Home() {
    location.href = "index.html";
}
function Facilities() {
    location.href = "index.html";
}
function Pricing() {
    location.href = "index.html";

}
function AboutUs() {
    location.href = "index.html";
}
function ContactUs() {
    location.href = "index.html";
}

document.getElementById('loginButton').onclick = function () {
    if ((document.getElementById('phoneNo').value.localeCompare("7066116295") + document.getElementById('passWord').value.localeCompare("1432")) == 0) {
        window.open("appointmentPage.html", "_blank")
        window.close()
    }
    else {
        alert("Invalid Phone No or Password!");
    }
};
function doctorLogin() {
    window.open("doctor_login.html", "_blank")
    window.close()
}