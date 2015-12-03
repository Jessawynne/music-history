var app = angular.module("musicApp", []);

app.controller("musicCtrl", function($scope) {
  $scope.title = "Pigeon Whispers";
  $scope.searchSongs = "";


  $scope.songs = [
    { name: "Mow the lawn", complete: "incomplete" },
    { name: "Cut the grass", complete: "complete" },
    { name: "Kill the ants", complete: "incomplete" },
    { name: "Trim the weeds", complete: "complete" }
  ];

  // edit song button
  $scope.editSong = function(song) {
  
  
  };

  // delete song button
  $scope.deleteSong = function(song) {
  
  var songIndex = $scope.songs.indexOf(song); 

    if (songIndex >= 0) {
      $scope.songs.splice(songIndex, 1);
    }
  };



});