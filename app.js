$(document).ready(function() {

var streamers = [
  "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
  "storbeck", "habathcx", "brunofin", "RobotCaleb", "noobs2ninjas"
];

//make a loop that goes through the streamers array and for each one,
//getJSON to retrieve the proper values and place in the DOM.
for (var i = 0; i < streamers.length; i++) {
  $.getJSON("https://wind-bow.gomix.me/twitch-api/channels/" + streamers[i] + "?callback=?", function(json) {
   console.log(streamers[i]);
   var streamUser = json.display_name;
   var streamTitle = json.status;
   var streamGame = json.game;
   var streamLink = json.url;
   var logo = json.logo;
   if (json.status === null) {
     $('.results').append("<div class='streambox'><div class='logo'><img src=" +
      logo + "></img></div>" + json.display_name + " is offline </div>");
   }
   else if (json.display_name === undefined) {
     $('.results').append("<div class='streambox'>"
      + streamers[i] + " user does not exist</div>");
   }
   else {
     if (streamGame === null) {
       streamGame = "";
     }
     var title = $("<div class='streambox'><div class='logo'><img src=" + logo +
                    "></img></div><div class='streaminfo'><div class='streamuser'><a href="
                    + streamLink + ">" + streamUser +
                    "</a></div><div class='streamtitle'>" + streamTitle +
                    "</div><div class='game'>" + streamGame + "</div></div></div>");
     $('.results').append(title);
   }
  });
}
});
