Package.describe({
  summary: "Test cordova package to try and create a failing scenario",
  version: "1.0.0"
});

Package.onUse(function (api) {
  api.use("templating", "web.cordova");
  api.addFiles("external-links.js", "web.cordova");
});

Cordova.depends({
  "org.apache.cordova.inappbrowser": "0.5.3"
});