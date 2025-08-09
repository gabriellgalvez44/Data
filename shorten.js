console.log(`You can use the following functions...

shown(id, tf) - id is the id name as a string, and tf is either true or false for visibility
copy(text, tf) - text is the text you want to copy to clipboard as a string, and tf is true or false for a message popup feed when copied
random(min, max)
create(text, id) - text is the HTML code you are adding, and id is the id of the element you want to add this HTML code without affecting typed in text in other elements!

You can use the following lines below for preventing actions in your web page...
prevent.inspect
prevent.rightClicking
prevent.pasting

If you wish to add a message that pops up when they try to perform these actions, add this pattern to the end of your line and set the message to whatever you wish for it to be...
.log = "Your message goes here..."

You can use the following IDs:
html - instead of using document.documentElement, this is the shortened version this script provides for you :)
head - instead of using document.head, this is the shortened version this script provides for you :)
body - instead of using document.body, this is the shortened version this script provides for you :)`)
document.documentElement.id = "html"
document.head.id = "head"
document.body.id = "body"
body.innerHTML = `<link rel=stylesheet href=https://gabriellgalvez44.github.io/Data/shorten.css>
${document.body.innerHTML}
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
