function applyScript(sou) {
let s = document.createElement('script')
s.src = sou
document.body.appendChild(s)
}
apply()
function apply() {
applyScript("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js")
applyScript("https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics-compat.js")
applyScript("https://www.gstatic.com/firebasejs/10.12.0/firebase-database-compat.js")
setTimeout(function(){
const firebaseConfig = {
apiKey: "AIzaSyB13I2cnqM2A7HWmy-my_-PysxzWO27-Qg",
authDomain: "vantacurrency.firebaseapp.com",
databaseURL: "https://vantacurrency-default-rtdb.firebaseio.com",
projectId: "vantacurrency",
storageBucket: "vantacurrency.appspot.com",
messagingSenderId: "799827027044",
appId: "1:799827027044:web:d75a23419c5497bf85ab71",
measurementId: "G-KDP3EYSSJ2"
}
const app = firebase.initializeApp(firebaseConfig)
const analytics = firebase.analytics(app)
}, 20)
}
