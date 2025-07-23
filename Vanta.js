function messageඞ() {
console.log(`Your can use the following vars...
credit (int var)
loggedIn (float var)
claimedDailyReward (float var)

You can use the following functions with this script...
logIn()
spend(amu, id, act) - amu, you replace with the amount of credit they spend, id is the card ID of the person that'll earn the spent credit, and act is the .js code in a string to execute once successfully spent!`)
}
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
storageBucket: "vantacurrency.firebasestorage.app",
messagingSenderId: "799827027044",
appId: "1:799827027044:web:d75a23419c5497bf85ab71",
measurementId: "G-KDP3EYSSJ2"
}
const app = firebase.initializeApp(firebaseConfig)
const analytics = firebase.analytics(app)
messageඞ()
}, 50)
}
function toCodeඞ(text) {
text = text.split('').map(char => char.charCodeAt(0).toString(2).replace(/ /g, '')).join('2')
while (text.includes("11")) {
text = text.replace("11", 3)
}
while (text.includes("100")) {
text = text.replace("100", 4)
}
while (text.includes("23")) {
text = text.replace("23", 5)
}
while (text.includes("15")) {
text = text.replace("15", 6)
}
while (text.includes("61")) {
text = text.replace("61", 7)
}
while (text.includes("35")) {
text = text.replace("35", 8)
}
while (text.includes("45")) {
text = text.replace("45", 9)
}
return text
}
function toNormඞ(text) {
while (text.includes("9")) {
text = text.replace("9", 45)
}
while (text.includes("8")) {
text = text.replace("8", 35)
}
while (text.includes("7")) {
text = text.replace("7", 61)
}
while (text.includes("6")) {
text = text.replace("6", 15)
}
while (text.includes("5")) {
text = text.replace("5", 23)
}
while (text.includes("4")) {
text = text.replace("4", 100)
}
while (text.includes("3")) {
text = text.replace("3", 11)
}
text = text.split('2').map(bin => String.fromCharCode(parseInt(bin, 2))).join('')
return text
}
function idExist(id, callback) {
if (typeof firebase === 'undefined' || id == "") {
callback(false)
return
}
firebase.database().ref('users/' + id).get()
.then(function(snapshot) {
callback(snapshot.exists())
})
.catch(function() {
callback(false)
})
}
let loggedInIDඞ = ""
let loggedIn = false
let credit = 0
function logIn() {
let id = prompt("Type in your account ID...")
idExist(toCodeඞ(id), function(exists) {
if (exists) {
loggedInIDඞ = id
loggedIn = true
alert("You are logged in now! :D")
setInterval(() => {
checkDailyඞ()
firebase.database().ref("users/" + toCodeඞ(loggedInIDඞ) + "/credit").once("value").then(snapshot => {
credit = snapshot.val() || 0
})
}, 100)
} else {
if (prompt("Would you like to make an account?\nSubmit 1 if yes...") == 1) {
createIDඞ()
}
}
})
}
function createIDඞ() {
const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
let interval = 4
const maxTries = 1000
function randomChar() {
return chars.charAt(Math.floor(Math.random() * chars.length))
}
function generateId(len) {
const parts = []
for (let i = 0; i < 3; i++) {
let part = ''
for (let j = 0; j < len; j++) {
part += randomChar()
}
parts.push(part)
}
return parts.join('-')
}
function idExists(id, callback) {
firebase.database().ref('users/' + toCodeඞ(id)).once('value')
.then(snapshot => callback(snapshot.exists()))
.catch(err => {
console.error("idExists error:", err)
callback(false)
})
}
function tryCreate(tries = 0) {
const id = generateId(interval)
idExists(id, function (exists) {
if (!exists) {
const encoded = toCodeඞ(id)
firebase.database().ref('users/' + toCodeඞ(id)).set({ credit: 0 }, function (userErr) {
if (!userErr) {
saveIDඞ(id)
} else {
alert("Error creating user folder")
}
})
} else {
if (tries >= maxTries) {
interval++
tries = 0
}
tryCreate(tries + 1)
}
})
}
tryCreate()
}
function saveIDඞ(id) {
alert(`Your ID is: ${id}...
BEFORE CLOSING THIS MESSAGE:
Either screenshot/photo of, or copy this message`)
navigator.clipboard.writeText(id)
}
function spend(amu, id, act) {
if (!loggedIn) return
if (amu <= 0) return
if (credit < amu) return
idExist(id, function(exists) {
if (!exists) return
const senderID = toCodeඞ(loggedInIDඞ)
const newSenderCredit = credit - amu
firebase.database().ref("users/" + senderID + "/credit").set(newSenderCredit, function(err) {
if (!err) {
firebase.database().ref("users/" + id + "/credit").once("value").then(s => firebase.database().ref("users/" + id + "/credit").set((s.val() || 0) + amu))
try {
eval(act)
} catch (e) {
console.error("Eval error:", e)
}
}
})
})
}
function earnඞ(amu) {
if (!loggedIn || amu <= 0) return
const id = toCodeඞ(loggedInIDඞ)
firebase.database().ref("users/" + id + "/credit").once("value").then(snapshot => {
const current = snapshot.val() || 0
firebase.database().ref("users/" + id + "/credit").set(current + amu)
})
}
let claimedDailyReward = false
function checkDailyඞ() {
if (!loggedIn) return
const id = toCodeඞ(loggedInIDඞ)
const today = new Date().toISOString().split('T')[0]
firebase.database().ref("users/" + id + "/day").once("value").then(snapshot => {
if (!snapshot.exists()) return
const lastClaimed = snapshot.val()
claimedDailyReward = (lastClaimed === today)
}).catch(() => {
})
}
function claimDailyඞ() {
if (!loggedIn) return ""
const id = toCodeඞ(loggedInIDඞ)
const today = new Date().toISOString().split('T')[0]
return firebase.database().ref("users/" + id + "/day").once("value").then(snapshot => {
const lastClaimed = snapshot.exists() ? snapshot.val() : ""
claimedDailyReward = (lastClaimed === today)
if (!claimedDailyReward) {
firebase.database().ref("users/" + id + "/day").set(today)
earnඞ(1)
}
return lastClaimed
}).catch(() => {
claimedDailyReward = false
return ""
})
}
