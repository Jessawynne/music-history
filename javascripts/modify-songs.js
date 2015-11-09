define(["jquery"], function($) {

  // $(document).on("click", ".edit-song", function() {
  
  //   return {
  //     editSongOnList: function(target) {

  //     }
  //   }
  // });

    return {
      deleteSongFromList: function (target) {
        $(this).parent().remove();
      }
    }
});