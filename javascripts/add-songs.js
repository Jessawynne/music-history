define(["jquery"], function($) {

  $("#add-to-list").click(function(e){

    var newSong = {
      title: $("#song-title").val(),
      artist: $("#artist-name").val(),
      album: $("#album-name").val(),
      year: $("#album-year").val()
    };

    $.ajax ({
      url: "https://sweltering-torch-8976.firebaseio.com/songs.json",
      method: "POST",
      data: JSON.stringify(newSong)
    }).done(function(addedSong) {
      console.log("Your new song is", addedSong);
    });

    $("#song-title").val("");
    $("#artist-name").val("");
    $("#album-name").val("");
    $("#album-year").val("");
  });

});