console.log(`You can use the following functions...

shown(id, tf) - id is the id name as a string, and tf is either true or false for visibility
copy(text, tf) - text is the text you want to copy to clipboard as a string, and tf is true or false for a message popup feed when copied
random(min, max)
create(text, id) - text is the HTML code you are adding, and id is the id of the element you want to add this HTML code without affecting typed in text in other elements!

--------------------

You can use the following lines below for preventing actions in your web page...
prevent.inspect
prevent.rightClicking
prevent.pasting

If you wish to add a message that pops up when they try to perform these actions, add this pattern to the end of your line and set the message to whatever you wish for it to be...
.log = "Your message goes here..."

--------------------

Use this line for installing and managing private text chatting... (THIS IS STILL IN WORKING PROGRESS!!!)
install.textChat

Use this to configure/manage your live private text chatting...
chat.code = "Your private text chat code goes here..."
chat.chatID = "The ID name of the element that'll visualize the html contents of the chat will go here..."

--------------------

You can use the following IDs:
html - instead of using document.documentElement, this is the shortened version this script provides for you :)
head - instead of using document.head, this is the shortened version this script provides for you :)
body - instead of using document.body, this is the shortened version this script provides for you :)`)
document.documentElement.id = "html"
document.head.id = "head"
document.body.id = "body"
if (!document.head) {
const head = document.createElement('head')
const html = document.documentElement;
if (html.firstChild) {
html.insertBefore(head, html.firstChild)
} else {
html.appendChild(head)
}
}
(() => {
const cssHref = "https://gabriellgalvez44.github.io/Data/shorten.css"
if (!head.querySelector(`link[href="${cssHref}"]`)) {
let link = document.createElement("link")
link.rel = "stylesheet"
link.href = cssHref
head.appendChild(link)
}
})()
(() => {
const firebaseScripts = [
"https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js",
"https://www.gstatic.com/firebasejs/9.22.1/firebase-database-compat.js",
"https://www.gstatic.com/firebasejs/9.22.1/firebase-auth-compat.js"
]
firebaseScripts.forEach(src => {
if (!head.querySelector(`script[src="${src}"]`)) {
let script = document.createElement("script")
script.src = src
script.defer = true
head.appendChild(script)
}
})
})()
body.innerHTML = `${document.body.innerHTML}
<hide>
<div id=dඞ></div>
</hide>`
function create(text, id) {
const sourceDiv = document.getElementById("dඞ")
if (!sourceDiv) return
sourceDiv.innerHTML = `<div id="iඞ">${text}</div>`
const tempWrapper = document.getElementById("iඞ")
const target = document.getElementById(id)
if (!tempWrapper || !target) return
while (tempWrapper.firstChild) {
target.appendChild(tempWrapper.firstChild)
}
tempWrapper.remove()
}
function shown(id, tf) {
if (tf) {
document.getElementById(id).style.display = ""
} else {
document.getElementById(id).style.display = "none"
}
}
function copy(text, tf) {
navigator.clipboard.writeText(text)
if (tf) {
alert(`Text copied to clipboard:

${text}`)
}
}
function random(min, max) {
min = parseInt(min) || 0
max = parseInt(max) || 1
function rand() {
return Math.floor(Math.random() * (max - min + 1)) + min
}
let seed = rand()
let noise = 0
for (let i=0;i<seed%7+3;i++) {
let garbage = rand()
noise += (garbage % 3 === 0 ? -1 : 1) * (garbage % 5)
}
let result = seed + Math.floor(noise / 3)
return Math.max(min, Math.min(max, result))
}
const prevent = {
_inspectLog: null,
get inspect() {
document.addEventListener("keydown", (e) => {
if (e.ctrlKey && e.key.toLowerCase() === "i") {
e.preventDefault()
if (prevent._inspectLog) {
alert(prevent._inspectLog)
}
}
})
return {
set log(msg) {
prevent._inspectLog = msg
},
get log() {
return prevent._inspectLog
}
}
},
get rightClicking() {
document.addEventListener("contextmenu", (e) => {
e.preventDefault()
if (prevent._rightClickingLog) {
alert(prevent._rightClickingLog)
}
})
return {
set log(msg) {
prevent._rightClickingLog = msg
},
get log() {
return prevent._rightClickingLog
}
}
},
get pasting() {
document.addEventListener("keydown", (e) => {
if (e.ctrlKey && e.key.toLowerCase() === "v") {
e.preventDefault()
if (prevent._pastingLog) {
alert(prevent._pastingLog)
}
}
})
return {
set log(msg) {
prevent._pastingLog = msg;
},
get log() {
return prevent._pastingLog;
}
}
}
}
const install = {
get textChat() {
const firebaseConfig = {
apiKey: "AIzaSyD3M5dR4c-tmUeNDlhlGP0XTLXtHWaVqlU",
authDomain: "chat-81dbd.firebaseapp.com",
databaseURL: "https://chat-81dbd-default-rtdb.firebaseio.com",
projectId: "chat-81dbd",
storageBucket: "chat-81dbd.firebasestorage.app",
messagingSenderId: "1090313558017",
appId: "1:1090313558017:web:3c1dd724d18c2f24f80800",
measurementId: "G-TDQHNW6R71"
}
setTimeout(function(){
const app = firebase.initializeApp(firebaseConfig)
const analytics = firebase.analytics(app)
}, 200)
const chat = {
code: "",
chatID: "",
clear() {

},
send(message) {

}
}
}
}
