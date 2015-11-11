define(["jquery"], function($) {
//Change between page views

  $("#link-list").click(function() {
      $("#list-music").show();
      $("#add-view").hide();
      $("#profile").hide();
  });

  $("#link-add").click(function() {
      $("#add-view").removeClass("hidden");
      $("#list-music").hide();
      $("#add-view").show();
      $("#profile").hide();
  });

  $("#link-profile").click(function() {
      $("#list-music").hide();
      $("#add-view").hide();
      $("#profile").show();
  });

});