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

require(["bootstrap", "add-songs", "dom-songs", "logsongs", "modify-songs", "musichistory"],

function (bootstrap, addSongs, domSongs, logSongs, modifySongs, hideAndShow){

  console.log("domSongs", domSongs);
  console.log("domSongs.toDomSong", domSongs.toDomSong);

  // populateSongs.loadSongs(domSongs.toDomSong);

  // $("#add-to-list").on("click", logSongs.addSongToList);

  $(".edit-song").on("click", modifySongs.editSongOnList);

  $(".delete-song").on("click", modifySongs.deleteSongFromList);
      




});

