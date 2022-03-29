document.body.style.backgroundImage = "url('images/background.jpg')"
document.body.style.backgroundPosition = "center"
document.body.style.backgroundSize = "cover"

var i = 0, j = 0;
var time = 3000;
var images = []
var hospital = []
var doctors = []
var doctorsName = []
var doctorsIntro = []
images[0] = 'images/hospital_images1.jpg'
images[1] = 'images/hospital_images2.jpg'
images[2] = 'images/hospital_images3.jpg'
images[3] = 'images/hospital_images4.jpg'
images[4] = 'images/hospital_images5.jpg'
hospital[0] = "All Types of Equipments"
hospital[1] = "All Types of Wards Availables"
hospital[2] = "24 x 7 Services"
hospital[3] = "Fully Maintained"
hospital[4] = "All Machinary at One Place"
doctors[0] = 'images/doctor1.jpg'
doctors[1] = 'images/doctor2.jpg'
doctors[2] = 'images/doctor3.jpg'
doctors[3] = 'images/doctor4.jpg'
doctorsName[0] = 'Dr. Payal S Agrawal'
doctorsName[1] = 'Dr. Sumeet Bharti'
doctorsName[2] = 'Dr. Irshad Pathan'
doctorsName[3] = 'Dr. Archana Menon'
doctorsIntro[0] = 'Neurologist, 15 years Experience. Doctored from Altai State Medical University, Russia. Working with us form last 4 years. Timings : 10am to 1pm & 5pm to 9pm (Saturday close)'
doctorsIntro[1] = 'Gynaecologist, 9 years Experience. Doctored from Delhi Medical University, Delhi. Working with us form last 3 years. Timings : 9am to 12pm & 7pm to 10pm (Sunday close)'
doctorsIntro[2] = 'Interventional Cardiologist, 20 years Experience. Doctored from Loma Linda University School of Medicine, California. Working with us form last 10 years. Timings : 4pm to 8pm (Wednesday close)'
doctorsIntro[3] = 'General & Child Specalist, 30 years Experience. Doctored from Reva University, Bengaluru. Working with us form last 15 years. Timings : 10am to 1pm & 5pm to 9pm (Monday close)'

function changeImg() {

    var t = document.getElementById('container');
    var subtitle = document.getElementById('image-info');


    var photos = document.getElementById('photo');
    var DoctorName = document.getElementById('doctorName');
    var DoctorIntro = document.getElementById('doctorIntro');

    t.src = images[i];
    subtitle.textContent = hospital[i]


    photos.src = doctors[j]
    DoctorName.textContent = doctorsName[j]
    DoctorIntro.textContent = doctorsIntro[j]


    if (i < images.length - 1) {
        i++;
    }
    if (j < doctors.length - 1) {
        j++;
    }

    if (i == images.length) {
        i = 0;
    }
    if (j == doctors.length) {
        j = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;

function Home() {
    location.href = "#navigation";
}
function Facilities() {
    location.href = "#details";
}
function Pricing() {
    location.href = "#pricing";
}
function AboutUs() {
    location.href = "#aboutUs";
}
function ContactUs() {
    location.href = "#contactUs";
}
function doctorLogin() {
    window.open("doctor_login.html", "_blank")
    window.close()
}

document.getElementById('login').onclick = function () {
    window.open("login.html", "_blank")
    window.close()

};
