angular.module('apper').controller('vidController', function($scope){
  $scope.dataNum;



$(document).ready(function() {

$.ajax('https://api.parse.com/1/classes/bjjLibrary', 
  {
    beforeSend: function(request) {
      request.setRequestHeader('X-Parse-Application-Id', 'PKZsJgHhNIj7DPEHCtNjaYBzjaod04InoSRv3BEB');
            request.setRequestHeader('X-Parse-REST-API-Key', 'LNfUg6i5NU1SdQiB6tvUJRgRk6T73Imjea1oqOuo');
        }
    }
).done(function(data) {
	console.log(data.results);
  //create variables with the number of counters and subs
    console.log(data.results[0].backCtrl.length);
    var stuff = data.results[0].backCtrl.length;

  //if the counter value is not true, treat as a sub, assign to subTable

    for (i = 0; i < stuff; i++) {

          if (data.results[0].backCtrl[i].counter === false) {

  	$('.subTable > tbody').append('<tr> <td> <div class="videos"> <iframe width="560" height="315" src="' + 
        data.results[0].backCtrl[i].youtube + 
        '?modestbranding=1&;showinfo=0&;autohide=1&;playsinline=0" frameborder="0" allowfullscreen> </iframe></div> <h3>' + 
        data.results[0].backCtrl[i].videoTitle + '</h3> </td> </tr>');
  }
        else {

  //else if it is a counter, treat as a counter by assigning to defTable
  	$('.defTable > tbody').append('<tr> <td> <div class="videos"> <iframe width="560" height="315" src="' + 
      data.results[0].backCtrl[i].youtube + 
      '?modestbranding=1&;showinfo=0&;autohide=1&;playsinline=0" frameborder="0" allowfullscreen> </iframe></div> <h3>' + 
      data.results[0].backCtrl[i].videoTitle + '</h3> </td> </tr>');

    }
  }
});
});
});