define(["jquery", "hbs"], function($, Handlebars) {

  return {
    toDomSong: function(songsObject) {

      require(['hbs!../templates/songs'], function (songTemplate) {
        $("#list-music").append(songTemplate(songsObject));
      });
    }
  };
});
