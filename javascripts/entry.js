requirejs.config({
  baseUrl: "./javascripts",
  paths: {
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
  },
  shim: {
    "bootstrap": {
      "deps" : ["jquery"]
    }
  }
});

require(["bootstrap", "populate-songs", "get-more-songs", "dom-songs", "logsongs", "musichistory"],

function (bootstrap, populateSongs, moreSongs, domSongs, logSongs, hideAndShow){

  console.log("domSongs", domSongs);
  console.log("domSongs.toDomSong", domSongs.toDomSong);

  populateSongs.loadSongs(domSongs.toDomSong);
  moreSongs.loadSongs(domSongs.toDomSong);

  $("#add-to-list").on("click", logSongs.addSongToList);




});

