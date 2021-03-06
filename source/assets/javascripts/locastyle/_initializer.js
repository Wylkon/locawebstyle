var locastyle = (function() {
  'use strict';

  function init() {
    locastyle.breakpoints.init();
    loadModules();
    locastyle.general.init();
    locastyle.sidebars.init();
    locastyle.btnGroup.init();
    locastyle.alert.init();
    locastyle.datepicker.init();
    locastyle.form.togglePasswordField();
    checkClassForTrack();
  }

  function loadModules() {
    var modules = getModules();
    for (var i in modules) {
      locastyle[modules[i]].init();
      // I know it is a console.log, let it to be here for a while
      console.log("Locastyle: module [" + modules[i] + "] successfully initialized.");
    }
  }

  function checkClassForTrack() {
    if($("html").hasClass("ls-trackevent-on")){
      locastyle.trackEvents.init();
    }
  }

  function getModules() {
    var modules = [];
    $("[data-ls-module]").each(function () {
      var module = $(this).data("ls-module");
      if ( modules.indexOf(module) === -1 ) {
        modules.push(module);
      }
    });
    return modules;
  }

  return {
    init: init
  };

}());

var ls = locastyle;

$(window).load(function() {
  locastyle.init();
});
