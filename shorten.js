console.log(`You can use the following functions...

shown(id, tf) - id is the id name as a string, and tf is either true or false for visibility
copy(text, tf) - text is the text you want to copy to clipboard as a string, and tf is true or false for a message popup feed when copied
random(min, max)`)
document.body.id = "body"
body.innerHTML = `Test ${document.body.innerHTML}`
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
