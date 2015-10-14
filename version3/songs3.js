var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

console.log(songs);

songs.unshift("Human > by Monsters and Men on the album Beneath The Skin");
console.log("Song added to front", songs);

songs.push("Dog Days Are Over > by Florence and the Machine on the album Lungs");
console.log("Song added to end", songs);

var	songElement = document.getElementById("right-bar");

var songList = "", 
	// title,
	// artist,
	// album;

for (var i = 0; i < songs.length; i++) {
	var currentSong = songs[i];

	currentSong = currentSong.replace(/[^a-z A-Z 0-9 \>]+/g, "").replace(">", "-");
	console.log("currentSong", currentSong);

	// var title = songs.slice(,);

	// var artist = songs.slice(,);

	// var album = songs.slice(,);
	

	songList = songList + "<div class='song-list-item'>" + currentSong + "</div>";
	// title = title + "<h2 class='sont-title'>" + 
}

// console.log("title", title);
// songElement.innerHTML = title;

// console.log("artist", artist);
// songElement.innerHTML = artist;

// console.log("album", album);
// songElement.innerHTML = album;

console.log("songList", songList)
songElement.innerHTML = songList;







