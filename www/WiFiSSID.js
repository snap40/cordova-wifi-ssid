var WiFiSSID = {
    getSSID: function(callback) {
        cordova.exec(callback, callback, "WiFiSSID", "getSSID", []);
    }
};

module.exports = WiFiSSID;
