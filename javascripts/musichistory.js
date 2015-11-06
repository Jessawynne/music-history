define(["jquery"], function($) {
//Change between page views

  $("#add-view").hide();

  $("#link-add").click(function() {
    console.log("#link-add");
      $("#list-music").hide();
      $("#add-view").show();
      $("#profile").hide();
  });

  $("#link-list").click(function() {
      $("#list-music").show();
      $("#add-view").hide();
      $("#profile").hide();
  });

  $("#link-profile").click(function() {
      $("#list-music").hide();
      $("#add-view").hide();
      $("#profile").show();
  });

});