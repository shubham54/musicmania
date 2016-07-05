var app=angular.module('music',[]);

app.controller('mainCtrl',function($scope,$http){

	$scope.tracks={};

	$scope.player=null;

	$scope.issearch=false;

	$scope.check = function () {

		SC.initialize({
	  		client_id: 'YOUR_CLIENT_ID'
		});

		SC.get('/tracks', {
	 		 q: $scope.search
		}).then(function(tracks) {
			$scope.tracks=tracks;
			$scope.issearch=true;
			$scope.$apply();
		});
	};


	$scope.getsound = function(id){
	 	var track_url = 'https://api.soundcloud.com/tracks/'+id;
		SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
			  $scope.player=oEmbed;
			  document.getElementById("splay").innerHTML=oEmbed.html;
			  $scope.issearch=false;
			  $scope.$apply()
		});

	};

	$scope.reset = function(){
		document.getElementById("splay").innerHTML="";
		$scope.issearch=true;
	};

});