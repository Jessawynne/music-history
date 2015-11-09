define(["jquery"], function($) {

  return {
    selectArtist: function(callbackFunctionReference) {
      // console.log("callbackFunctionReference",callbackFunctionReference);
      $.ajax({ url: "data/songs.json"}).done(callbackFunctionReference);
    }
  };
});
