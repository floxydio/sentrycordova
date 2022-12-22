cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "sentry-cordova.Sentry",
      "file": "plugins/sentry-cordova/dist/js/sentry-cordova.bundle.js",
      "pluginId": "sentry-cordova",
      "clobbers": [
        "Sentry"
      ]
    }
  ];
  module.exports.metadata = {
    "sentry-cordova": "1.0.0-rc.0"
  };
});