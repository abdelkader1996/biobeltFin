cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-chrome-apps-common.events",
      "file": "plugins/cordova-plugin-chrome-apps-common/events.js",
      "pluginId": "cordova-plugin-chrome-apps-common",
      "clobbers": [
        "chrome.Event"
      ]
    },
    {
      "id": "cordova-plugin-chrome-apps-common.errors",
      "file": "plugins/cordova-plugin-chrome-apps-common/errors.js",
      "pluginId": "cordova-plugin-chrome-apps-common"
    },
    {
      "id": "cordova-plugin-chrome-apps-common.stubs",
      "file": "plugins/cordova-plugin-chrome-apps-common/stubs.js",
      "pluginId": "cordova-plugin-chrome-apps-common"
    },
    {
      "id": "cordova-plugin-chrome-apps-common.helpers",
      "file": "plugins/cordova-plugin-chrome-apps-common/helpers.js",
      "pluginId": "cordova-plugin-chrome-apps-common"
    },
    {
      "id": "cordova-plugin-chrome-apps-sockets-tcp.sockets.tcp",
      "file": "plugins/cordova-plugin-chrome-apps-sockets-tcp/sockets.tcp.js",
      "pluginId": "cordova-plugin-chrome-apps-sockets-tcp",
      "clobbers": [
        "chrome.sockets.tcp"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.Coordinates",
      "file": "plugins/cordova-plugin-geolocation/www/Coordinates.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "Coordinates"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "PositionError"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.Position",
      "file": "plugins/cordova-plugin-geolocation/www/Position.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "Position"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-hotspot.HotSpotPlugin",
      "file": "plugins/cordova-plugin-hotspot/www/HotSpotPlugin.js",
      "pluginId": "cordova-plugin-hotspot",
      "clobbers": [
        "cordova.plugins.hotspot"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/ios/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection",
        "navigator.network.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-sqlite-storage.SQLitePlugin",
      "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
      "pluginId": "cordova-sqlite-storage",
      "clobbers": [
        "SQLitePlugin"
      ]
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
      "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
      "pluginId": "phonegap-plugin-barcodescanner",
      "clobbers": [
        "cordova.plugins.barcodeScanner"
      ]
    },
    {
      "id": "wifiwizard2.WifiWizard2",
      "file": "plugins/wifiwizard2/www/WifiWizard2.js",
      "pluginId": "wifiwizard2",
      "clobbers": [
        "window.WifiWizard2"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.ios-wkwebview-exec",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/ios/ios-wkwebview-exec.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "cordova.exec"
      ]
    },
    {
      "id": "cordova-open-native-settings.Settings",
      "file": "plugins/cordova-open-native-settings/www/settings.js",
      "pluginId": "cordova-open-native-settings",
      "clobbers": [
        "cordova.plugins.settings"
      ]
    },
    {
      "id": "cordova-plugin-ping.ping",
      "file": "plugins/cordova-plugin-ping/www/ping.js",
      "pluginId": "cordova-plugin-ping",
      "clobbers": [
        "Ping"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-chrome-apps-common": "1.0.7",
    "cordova-plugin-chrome-apps-iossocketscommon": "1.0.2",
    "cordova-plugin-chrome-apps-sockets-tcp": "1.3.7",
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-geolocation": "4.1.0",
    "cordova-plugin-hotspot": "1.2.10",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-network-information": "2.0.2",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-statusbar": "2.4.2",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-sqlite-storage": "4.0.0",
    "es6-promise-plugin": "4.1.0",
    "phonegap-plugin-barcodescanner": "8.1.0",
    "wifiwizard2": "3.1.1",
    "cordova-plugin-ionic-webview": "5.0.0",
    "cordova-open-native-settings": "1.5.5",
    "cordova-plugin-ping": "0.5.0",
    "cordova-plugin-androidx": "3.0.0"
  };
});