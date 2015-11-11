define(["jquery", "hbs"], function($, Handlebars) {
  //module variable
  var filteredSongs = {
    songs: {
    }
  };

  //module variable
  var moduleSongsObject;

  function populateTemplates(songsObject) {
      moduleSongsObject = songsObject;
      require(['hbs!../templates/songs'], function (songTemplate) {
        $("#list-music").html(songTemplate(songsObject));
      });

      require(['hbs!../templates/artist'], function (songTemplate) {
        $("#artist-options").html(songTemplate(songsObject));
      });

      require(['hbs!../templates/album'], function (songTemplate) {
        $("#album-options").html(songTemplate(songsObject));
      });
    }

  //when filter button is clicked
  $(document).on("click", ".filter", function () {
    //grab text of which artist option is selected
    var selectedArtist = $("#artist-options option:selected").text();
    console.log("selectedArtist", selectedArtist);
    //loop through list of all songs; key used when you don't know name of ones added
    console.log("moduleSongsObject", moduleSongsObject);
    for (var key in moduleSongsObject.songs) {
      //define var for current song values
      var currentSong = moduleSongsObject.songs[key];
      // console.log("currentSong", currentSong);
      // Does `selectedartist` equal `currentSong.artist`?
      if (currentSong.artist === selectedArtist) {
        //target object within obejct then make that the current song value
        filteredSongs.songs[key] = currentSong;
      }
    }
    console.log("filteredSongs", filteredSongs);
    populateTemplates(filteredSongs);

  });
    
    
  return {
    toDomSong: populateTemplates
  };
});

