define(["jquery"], function($) {

  return {
    loadSongs: function(callbackFunctionReference) {
      // console.log("getMore 'loadSongs' called...")
      $.ajax({ url: "data/more-songs.json"}).done(callbackFunctionReference);
    }
  };
});