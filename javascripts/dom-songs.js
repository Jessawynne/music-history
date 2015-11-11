define(["jquery", "hbs/handlebars"], function($, Handlebars) {
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

      var uniqueArtists = [];
  
      Handlebars.registerHelper('noDuplicateArtist', function(options) {
        if (uniqueArtists.indexOf(this.artist) === -1) {
          uniqueArtists.push(this.artist);
          return options.fn(this);
        }
      });

      var uniqueAlbums = [];

      Handlebars.registerHelper('noDuplicateAlbum', function(options) {
        if (uniqueAlbums.indexOf(this.album) === -1) {
          uniqueAlbums.push(this.album);
          return options.fn(this);
        }
      });
    }

  //when filter button is clicked
  $("#artist-options").change(function () {
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

