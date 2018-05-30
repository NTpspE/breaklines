module.exports = function breaklines(breakString) {
	return breakString.replace(/(\r\n|\n|\r)/gm, '<br>').replace(/(\n\n)/gm, '<br><br>')
}