
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

document.getElementById("appointmentButton").onclick = function () {
    alert("Appointment Done!\nName : " + document.getElementById("Name").value + "\nDoctor Name : " + document.getElementById("doctorName").value + "\n at " + document.getElementById("time").value + " " + document.getElementById('date').value)

}
document.getElementById("logout").onclick = function () {
    window.open("index.html", "_blank");
    window.close()
}
