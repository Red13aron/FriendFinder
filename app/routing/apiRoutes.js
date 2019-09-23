// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        let me = req.body;
        let totalScores = [];
        const bestMatch = {
            index: 0,
            score: 100
        };
        friends.forEach(friend => {
            let totalScore = 0;
            for(let i = 0; i<friend.scores.length; i++){
               totalScore = me.scores[i] - friend[i]; 
            }
            totalScores.push(totalScore);
        });
        for(let i = 0; i < totalScores.length; i++){
            if(totalScores[i] < bestMatch.score){
                bestMatch.index = i;
            }
        }
        res.json(friends[bestMatch.index]);

        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the match of the person they most closely resemble
        // req.body is available since we're using the body parsing middleware

    });


};