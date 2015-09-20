/**
 * Created by previousdeveloper on 20.09.2015.
 */
var fs = require("fs");
var request = require('request');

(function () {


    var Lister = {};


    Lister.check = function (path, cb) {

        fs.readFile(path, function (err, f) {

            if (f === undefined) {
                throw new Error("file path not found");
            }
            var array = f.toString().split('\n');

            array.forEach(function (data) {
                request(data, function (error, response, body) {
                    if (!error && response.statusCode == 200) {

                        cb(data);

                    } else {

                    }
                })

            });
        });


    };

    module.exports = Lister;

})();