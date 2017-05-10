var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');
var url = 'http://www.xossip.com/showthread.php?t=1481309&page=9';

var string = "foo",
    substring = "obo";
console.log(string.includes(substring));

request(url, function (error, response, html) {
    var $ = cheerio.load(html);
    var imgs = $('img').attr('src');
   console.log(imgs);
})


