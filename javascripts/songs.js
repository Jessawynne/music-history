// Change view between List Music, Add Music and Profile pages.
$(document).ready(function() {
	$("#add-view").hide();

	$("#link-add").click(function() {
		console.log("#link-add");
	    $("#list-music").hide();
	    $("#add-view").show();
	    $("#profile").hide();
	});

	$("#link-list").click(function() {
	    $("#list-music").show();
	    $("#add-view").hide();
	    $("#profile").hide();
	});

	$("#link-profile").click(function() {
	    $("#list-music").hide();
	    $("#add-view").hide();
	    $("#profile").show();
	});

// ----------Drop-down
	var ChooseArtist = [
	    {album: "Choose an Album", value: "Choose an Album"},
	];
	var ofMonstersAndMen = [
	    {album: "Beneath The Skin", value: "Beneath The Skin"},
	];
	var florenceAndTheMachine = [
	    {album: "Lungs", value: "Lungs"}
	];
	var ellieGoulding = [
	    {album: "Burn", value: "Burn"}
	];
	var jackJohnson = [
	    {album: "In Between Dreams", value: "In Between Dreams"}
	];

	$("#artist-options").change(function() {
	    var select = $("#artist-options option:selected").val();
	    switch(select) {
	        case "Of Monsters and Men":
	            $('#option').html(ofMonstersAndMen[0].album);
	        break;
	        case "Florence and the Machine": 
	            $('#option').html(florenceAndTheMachine[0].album);
	        break;
	        case "Ellie Goulding": 
	            $('#option').html(ellieGoulding[0].album);
	        break;
	        case "Jack Johnson": 
	            $('#option').html(jackJohnson[0].album);
	        break;
	        case "Choose an Artist":
	            $('#option').html(ChooseArtist[0].album);
	        break;
	        default: 
	        $("#artist-options").empty();
	        $("#artist-options").append("<option>Choose an Artist</option>");
	        break;
	    }
	});

	$.ajax({
	    url: "data/songs.json"
	  }).done(function(contentsOfListMusic) {
	  	console.log("the contents of songs.json");
	  	console.log(contentsOfListMusic.songs);
	    console.log(contentsOfListMusic.songs.length);


		for (var i = 0; i < contentsOfListMusic.songs.length; i++) {
			var currentSong = contentsOfListMusic.songs[i];
			console.log(currentSong);
			$("#list-music").append("<h1>" + currentSong.title + "</h1>");
			$("#list-music").append("<div>Performed by " + currentSong.artist + "</div>");
			$("#list-music").append("<div>on the album " + currentSong.album + "</div>");
		}
	
	});

// ------------------ADD MUSIC TO LIST MUSIC VIEW
// Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.

var songTitleInput = $("#song-title");
var artistNameInput = $("#artist-name");
var albumNameInput = $("#album-name");
var addToList = $("#add-to-list");
var listMusic = $("#list-music");

var postedSong = $(".posted-song");

function postSong () {
    var postPart1 = "<div class='posted-song'>";
    var postContent = "<h1>" + songTitleInput.val() + "</h1>" + "<div>" + "Performed by " + artistNameInput.val() + "</div>" + "<div>" + " on the album " + albumNameInput.val() + "</div>";
    var editSong = "<button class='edit-song' type='button'>Edit</button>" + " ";
    var deleteSong = "<button class='delete-song' type='button'>Delete</button>";
    var postPart2 = "</div>";
    var output = (postPart1 + postContent + editSong + deleteSong + postPart2);

    listMusic.append(output);
    songTitleInput.val("");
    artistNameInput.val("");
    albumNameInput.val("");
}

$("#add-to-list").on('click', function(event) {
    postSong();
    });

});


// ------------------START OF DELETE BUTTONS-----
// Add delete button DOM to each row and use jQuery to delete entire row in the DOM.

// $("")


// }); 
