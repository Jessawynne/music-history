define(["jquery", "hbs"], function($, Handlebars) {

  return {
    addSongToList: function(event) {
     var songInfo = {
        songs: [{ 
        title: $("#song-title").val(),
        artist: $("#artist-name").val(),
        album: $("#album-name").val()
        }]
      };

      require(["hbs!../templates/songs"], function (songTemplate) {
          $("#list-music").append(songTemplate(songInfo));

          $("#song-title").val("");
          $("#artist-name").val("");
          $("#album-name").val("");
        });
    }
  };


});
  
