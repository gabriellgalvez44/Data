console.log(`You can use the following functions...

shown(id, tf) - id is the id name as a string, and tf is either true or false for visibility
copy(text, tf) - text is the text you want to copy to clipboard as a string, and tf is true or false for a message popup feed when copied
random(min, max)`)
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
function cycle() {
return Math.floor(Math.random() * (max - min + 1)) + min
}
let num = cycle()
while (cycle() !== cycle()) {
num = cycle()
}
for (let i=0;i<cycle();i++) {
cycle()
}
return num
}
