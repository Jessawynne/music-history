define(["jquery"], function($) {

  return {
    loadSongs: function(callbackFunctionReference) {
      // console.log("callbackFunctionReference",callbackFunctionReference);
      $.ajax({ url: "https://sweltering-torch-8976.firebaseio.com/.json"}).done(callbackFunctionReference);
    }
  };
});
