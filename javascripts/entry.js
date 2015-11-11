requirejs.config({
  baseUrl: "./javascripts",
  paths: {
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "lodash": "../lib/bower_components/lodash/lodash.min"
  },
  shim: {
    "bootstrap": {
      "deps" : ["jquery"]
    }
  }
});

require(["jquery", "lodash", "hbs/handlebars", "bootstrap", "add-songs", "populate-songs", "dom-songs", "modify-songs", "musichistory"],

function ($, _, Handlebars, bootstrap, addSongs, populateSongs, domSongs, modifySongs, hideAndShow){

  console.log("domSongs", domSongs);
  console.log("domSongs.toDomSong", domSongs.toDomSong);

  populateSongs.loadSongs(domSongs.toDomSong);

  // $(".edit-song").on("click", modifySongs.editSongOnList);

  // $(".delete-song").on("click", modifySongs.deleteSongFromList);

  
});

