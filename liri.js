var twitter = require("twitter");
var keys = require("./keys.js");
var input = process.argv[2];


if (input === 'my-tweets') {
    var T = new twitter(keys);

    var params = { screen_name: 'JamesLeeNode', count: '10'};
    T.get('statuses/user_timeline', params, searchedData);
    function searchedData(err, data, response) {
        for (i = 0; i < 10 ; i++) {
            console.log(data[i].text); 
        }
    };
}