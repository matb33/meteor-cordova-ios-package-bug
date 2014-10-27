Template.body.events({
  "click a[target='_blank']": function (evt, template) {
    var href = $(evt.currentTarget).attr("href");
    evt.preventDefault();
    Meteor.startup(function () {
      console.log("Open external URL using _system:", href);
      window.open(href, "_system");
    });
  }
});