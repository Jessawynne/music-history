define(["jquery", "hbs"], function($, Handlebars) {

  return {
    deleteSongFromList: function (target) {
      $(".delete-song").click(function() {
        console.log("delete-song");
        $(this).parent().remove();
      });
    }
  };

  // return {
  //   editSongOnList: function(target) {
  //      $(".edit-song").click(function() {
  //        console.log("edit-song");
  //      });
  //   }
  // }
});