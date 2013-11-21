var locastyle = locastyle || {};

locastyle.shortcuts = (function() {
  'use strict';

  function init(){
    checkShortcut();
  }


  function checkShortcut() {
    if ($(".shortcut-box").length > 0) {
      bgShortcutWorkaround();
    }
  }

  // Aquele background cinza que fica sempre atrás do elemento Shortcut
  // Não nos orgulhamos disso. Mas não havia maneira melhor de fazer. ;-)
  function bgShortcutWorkaround() {
    var shortcut = $('.shortcut-box');

    if($(shortcut).data('embed')) {

      var target = $(shortcut).data('embed');
      $(target).prepend('<span class="bg-shortcut-workaround"></span>');

    } else {

      $('.main').prepend('<span class="bg-shortcut-workaround"></span>');
    }

    $('.bg-shortcut-workaround').css('height', $('.shortcut-box').outerHeight());
    $( window ).resize(function() {
      $('.bg-shortcut-workaround').css('height', $('.shortcut-box').outerHeight());
    });
  }

  return {
    init: init
  };

}());
