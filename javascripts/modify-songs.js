define(["jquery", "hbs/handlebars"], function($, Handlebars) {

  // return {
  //   deleteSongFromList: function() {

      $("body").on("click", ".delete-song", function() {
        console.log("CAT LORD"); 
        var songId = $(this).attr("songid");
        
        $.ajax({
          url: "https://sweltering-torch-8976.firebaseio.com/songs/" + songId + "/.json",
          method: "DELETE",
        }).done(function(deleteSong) {
          console.log("Yay, it deleted!", deleteSong);
        });

      });
  //   }
  // };

  // return {
  //   editSongOnList: function(target) {
  //      $(".edit-song").click(function() {
  //        console.log("edit-song");
  //      });
  //   }
  // }
});

