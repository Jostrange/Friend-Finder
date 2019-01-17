// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var allSurveySubmissions = require('../data/friends.js');

var initializeAPI = function(app){
    

    // Routes
    // ===========================================================
    
    app.get("/api/friends", function (req, res) {
        return res.join(allSurveySubmissions)
    
    });
        
    
    
    app.post("/api/friends", function (req, res) {
        var friendData = req.body;
        console.log(friendData);
        //route the data to a reservation if the top 5 requests, or waitlist if after
        if (friendData.length) friendData.push(allSurveySubmissions)
        else{
            compatibleFriends.push(matches);
        }
    
        res.end();
    
    });
      
}

module.exports = initializeAPI;