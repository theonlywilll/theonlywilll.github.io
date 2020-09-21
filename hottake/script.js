function pick_random(data) {
	if (data.constructor == Object) {
		data = Object.keys(data);
	};

	const pick = Math.floor(Math.random() * data.length);

	return data[pick];
};

function doit() {
	var game = game_list[pick_random(game_list)];
	game_entry = pick_random(game);

	var phrase = pick_random(phrase_list);

	const char_pool = char_list[game_entry];
	const data = {
		'{g}': game[game_entry],
		'{r}': pick_random(reason_list)
	};

	for (const [key, value] of Object.entries(data)) {
		phrase = phrase.replace(key, value);
	};

	var picked = []
	while (phrase.includes('{c}')) {
		var char = '';
		while (picked.includes(char) || char == '') {
			char = pick_random(char_pool);
		};

		picked.push(char);
		phrase = phrase.replace('{c}', char);
	};

	return phrase.charAt(0).toUpperCase() + phrase.slice(1);
};