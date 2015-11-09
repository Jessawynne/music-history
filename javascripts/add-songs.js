define(["jquery"], function($) {

  $("#add-to-list").click(function(e){

    var newSong = {
      name: $("#song-title").val(),
      artist: $("#artist-name").val(),
      album: {
        name: $("#album-name").val(),
        year: $("album-year").val()
      }
    };


    $.ajax ({
      url: "https://sweltering-torch-8976.firebaseio.com/songs.json",
      method: "POST",
      data: JSON.stringify(newSong)
    }).done(function(addedSong) {
      console.log("Your new song is", addedSong);
    });
  });
});