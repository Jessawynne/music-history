define(["jquery"], function($) {

  return {
    loadSongs: function(callbackFunctionReference) {
      // console.log("callbackFunctionReference",callbackFunctionReference);
      $.ajax({ url: "data/songs.json"}).done(callbackFunctionReference);
    }
  };
});
