console.log(`You can use the following functions...

shown(id, tf) - id is the id name as a string, tf is either true or false`)
function shown(id, tf) {
if (tf) {
document.getElementById(id).style.display = ""
} else {
document.getElementById(id).style.display = "none"
}
}
