/**
* jquery.disableSelection
*
* This ecma script disable text selection on html elements
*
* to go:
*   
*   $('any selector').disableSelection();
*
* p.s.:
*   don't forget to import the .js file !
*
* @license MIT <http://iceon.me/mit.txt>
* @license GPL <http://iceon.me/gpl.txt>
* @author Stéfano Stypulkowski <iceon.me>
* @require jquery 1.4+
*/
jQuery.fn.disableSelection = function() {

  $(this).each(function (){
    
    var element = $(this)[0];

    element.onselectstart = function (){
      return false;
    }

    element.onmousedown = function (){
      return false;
    }
  });
};