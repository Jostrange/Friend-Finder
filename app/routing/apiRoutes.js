// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var allSurveySubmissions = require('../data/friends.js');

var initializeAPI = function(app){
    

    // Routes
    // ===========================================================
    
    app.get("/api/friends", function (req, res) {
        return res.json(allSurveySubmissions)
        
    
    });
        
    
    app.post("/api/friends", function (req, res) {
        var friendData = req.body;

        var userResponses = friendData.scores;
        console.log('userResponses = ' + userResponses);

        var matchName = '';
        var matchImage = '';
        var totalDifference = 10000;

        for(var i = 0; i < allSurveySubmissions.length; i++){
            var difference = 0;
            for (var j = 0; j < userResponses.length; j++){
                difference += Math.abs(allSurveySubmissions[i].scores[j] - userResponses[j]);
            }

            if (difference < totalDifference){

                totalDifference = difference;
                matchName = allSurveySubmissions[i].name;
                matchImage = allSurveySubmissions[i].photo;
            }
        }

        allSurveySubmissions.push(friendData);
        res.json({status: 'OK', matchName, matchImage: matchImage});
  
      
})};

module.exports = initializeAPI;