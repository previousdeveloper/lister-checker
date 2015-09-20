/**
 * Created by previousdeveloper on 20.09.2015.
 */
var fs = require("fs");
var request = require('request');

var Lister = {};


Lister.check = function (path, cb) {

    fs.readFile(path, function (err, f) {

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

