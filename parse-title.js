function titleCase(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function parseTitle(title, {keywords, labels}) {
	const [, intro] = title.split(/(.+[)-:\]])/, 2);
	const cleanIntro = intro && intro
		.replace(/[^\s\w]/g, '')
		.toLowerCase()
		.trim();
	if (intro && keywords.some(keyword => keyword.toLowerCase() === cleanIntro)) {
		return {
			labels: labels ? labels : [],
			title: titleCase(title.replace(intro, '').trim())
		};
	}

	return {title, labels: []};
}

module.exports = parseTitle;