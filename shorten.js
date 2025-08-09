console.log(`You can use the following functions...

shown(id, tf) - id is the id name as a string, and tf is either true or false for visibility
copy(text, tf) - text is the text you want to copy to clipboard as a string, and tf is true or false for a message popup feed when copied
random(min, max)
create(text, id) - text is the HTML code you are adding, and id is the id of the element you want to add this HTML code without affecting typed in text in other elements!
openMasked(url) - replace url with the url you want to open in a masked window but in as a string, masked previews a website without directly exposing the url in the url bar!

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
chat.send("Message goes here...")
chat.clear()

Make sure when you set your chat code and chatID, it has a 200 millisecond delay, do it by this...

setTimeout(function(){
//replace this line with the code you use to set your chat code and chatID
}, 200)

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
if (!head.querySelector('script[src="https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js"]')) {
const script1 = document.createElement("script")
script1.src = "https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js"
script1.defer = true
head.appendChild(script1)
}
if (!head.querySelector('script[src="https://www.gstatic.com/firebasejs/9.22.1/firebase-database-compat.js"]')) {
const script2 = document.createElement("script")
script2.src = "https://www.gstatic.com/firebasejs/9.22.1/firebase-database-compat.js"
script2.defer = true
head.appendChild(script2)
}
if (!head.querySelector('script[src="https://www.gstatic.com/firebasejs/9.22.1/firebase-auth-compat.js"]')) {
const script3 = document.createElement("script")
script3.src = "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth-compat.js"
script3.defer = true
head.appendChild(script3)
}
if (!head.querySelector('script[src="https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics-compat.js"]')) {
const script4 = document.createElement("script")
script4.src = "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics-compat.js"
script4.defer = true
head.appendChild(script4)
}
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
const analytics = firebase.analytics()
}, 200)
window.chat = {
code: "",
chatID: "",
clear() {
if (!this.code) {
console.error("chat.code is not set")
return
}
firebase.database().ref(this.code).remove()
.then(() => console.log(`Cleared chat folder: ${this.code}`))
.catch(err => console.error("Error clearing chat:", err))
},
send(text) {
if (!this.code) {
console.error("chat.code is not set")
return
}
firebase.database().ref(this.code).push(text)
.then(() => console.log(`Sent message to ${this.code}: ${text}`))
.catch(err => console.error("Error sending message:", err))
}
}
setInterval(() => {
if (!chat.code || !chat.chatID) return
const targetEl = document.getElementById(chat.chatID)
if (!targetEl) return
firebase.database().ref(chat.code).once("value")
.then(snapshot => {
let html = ""
snapshot.forEach(child => {
html += `<div>${child.val()}</div>`
})
targetEl.innerHTML = html
})
.catch(err => console.error("Error fetching messages:", err))
}, 1)
}
}
function openMasked(url) {
const features = "toolbar=no,menubar=no,location=no,status=no,resizable=yes,scrollbars=yes,width=1000,height=700"
const name = "masked_" + Date.now()
const win = window.open("about:blank", name, features)
if (!win) return null
try {
win.opener = null
} catch (e) {}
const encoded = encodeURIComponent(String(url))
const html = `<!DOCTYPE html>
<html lang=en>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body style="margin:0;overflow:hidden;height:100%;">
<iframe id="masked_iframe" style="width:100vw;height:100vh;border:none"></iframe>
<script src="https://gabriellgalvez44.github.io/Data/shorten.js"></script`+`>
<script>
try {
document.getElementById("masked_iframe").src = decodeURIComponent("${encoded}")
} catch(e) {}
</script`+`>
</body>
</html>`
win.document.open()
win.document.write(html)
win.document.close()
return win
}
