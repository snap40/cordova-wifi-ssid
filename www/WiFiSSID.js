exec = require("cordova/exec");

const PLUGIN_CLASS_NAME = "WiFiSSID";
const PLUGIN_METHOD_NAME = "getSSID";

var WiFiSSID = {
    getSSID: function(successCallback, errorCallback) {

        cordova.exec(
            successCallback,
            errorCallback,
            PLUGIN_CLASS_NAME,
            PLUGIN_METHOD_NAME
        );
        exec(successCallback, errorCallback, PLUGIN_CLASS_NAME, PLUGIN_METHOD_NAME, []);
    }
};

module.exports = WiFiSSID;
