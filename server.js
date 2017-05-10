var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');
var url = 'http://google.com';

var string = "foo",
    substring = "obo";
console.log(string.includes(substring));

request(url, function (error, response, html) {
    var $ = cheerio.load(html);
    var imgs = $('img').attr('src');
   console.log(imgs);
})


