var exec = require('cordova/exec');

var WiFiSSID = function() {};

WiFiSSID.getSSID = function(callback) {
  exec(callback, callback, "WiFiSSID", "getSSID", []);
};

module.exports = WiFiSSID;
