// Use JavaScript arrays, loops, and innerHTML to show the music you love.

// Students must use JavaScript to create a list of songs in the index.html file 
// for their Music History project. Have them download the songs.js file, which 
// contains an array of strings with song information.

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

console.log(songs);

// Each student must add one song to the beginning and the end of the array.
songs.unshift("Human > by Monsters and Men on the album Beneath The Skin");
console.log("Song added to front", songs);

songs.push("Dog Days Are Over > by Florence and the Machine on the album Lungs");
console.log("Song added to end", songs);

var	songElement = document.getElementById("right-bar");

var songList = "";

// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.
for (var i = 0; i < songs.length; i++) {
	var currentSong = songs[i];

	currentSong = currentSong.replace(/[^a-z A-Z 0-9 \>]+/g, "").replace(">", "-");
	console.log("currentSong", currentSong);

	songList = songList + "<div class='song-list-item'>" + currentSong + "</div>";


}

console.log("songList", songList)

songElement.innerHTML = songList;

