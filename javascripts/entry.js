requirejs.config({
  baseUrl: "./javascripts",
  paths: {
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "lodash": "../lib/bower_components/lodash/lodash.min",
    "firebase": "../lib/bower_components/firebase/firebase"
  },
  shim: {
    "bootstrap": {
      "deps" : ["jquery"]
    },
    "firebase": {
      exports: "Firebase"
}
  }
});

require(["firebase", "jquery", "lodash", "hbs/handlebars", "bootstrap", "add-songs", "populate-songs", "dom-songs", "modify-songs", "musichistory"],

function (Firebase, $, _, Handlebars, bootstrap, addSongs, populateSongs, domSongs, modifySongs, hideAndShow){

  console.log("domSongs", domSongs);
  console.log("domSongs.toDomSong", domSongs.toDomSong);

  populateSongs.loadSongs(domSongs.toDomSong);
  
});

