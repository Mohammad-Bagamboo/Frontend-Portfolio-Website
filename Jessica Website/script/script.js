var boldIcon = document.querySelector('.bold-icon');
var italicIcon = document.querySelector('.italic-icon');
var underlineIcon = document.querySelector('.underline-icon');
var linkIcon = document.querySelector('.link-icon');
var message = document.querySelector('.message');

function markdown(markdownSymbolRight, markdownSymbolLeft, insertText) {
	var start = message.selectionStart;
	var end = message.selectionEnd;
	var content = message.value;
	var beforeText = content.substring(0, start);
	var afterText = content.substring(end, content.length);
	if (start === end) {
		var boldText =
			markdownSymbolRight + insertText + markdownSymbolLeft + ' ';
	} else {
		var boldText =
			markdownSymbolRight +
			content.substring(start, end) +
			markdownSymbolLeft;
	}

	message.value = beforeText + boldText + afterText;
	message.focus();
}

boldIcon.addEventListener('click', () => markdown('**', '**', 'enter text'));
italicIcon.addEventListener('click', () => markdown('*', '*', 'enter text'));
underlineIcon.addEventListener('click', () =>
	markdown('<u>', '</u>', 'enter text')
);
linkIcon.addEventListener('click', () =>
	markdown('[Enter text]', '(enter link)', '')
);

var n = document.createElement('a');
n.children.push();
