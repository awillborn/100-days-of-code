var http = require("http")

// Print out message
function printMessage(username, badgeCount, points) {
  message = username + " has " + badgeCount + " total badge(s) and " + points + " points.";
  console.log(message)
}

// Print out error message
function printErrorMessage(error){
  console.error(error.message);
}

function get(username){
  var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response){
    var body = '';

    response.on('data', function(chunk){
      body += chunk;
    });

    response.on('end', function(){
      if(response.statusCode=== 200){
        try {
          // Parse the data
          var profile = JSON.parse(body)
          // Print the data
          printMessage(username, profile.badges.length, profile.points.total)
        } catch(error) {
          // Parse Error
          printErrorMessage(error);
        }
      }
      else {
        // Status Code Error
        printErrorMessage({ message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
      }
    })
  });

  // Connection Error
  request.on('error', printErrorMessage)
}

module.exports.get = get;
