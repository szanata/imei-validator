/**
* jquery.unselectable 1.3.1
*
* This ECMA script disable text selection on HTML elements
*
* to go:
*   
*   $('any selector').unselectable();
*
* p.s.:
*   don't forget to import the .js file !
*
* @license MIT <http://iceon.me/mit.txt>
* @license GPL <http://iceon.me/gpl.txt>
* @author Stéfano Stypulkowski <iceon.me>
* @require jquery 1.4+
*/
jQuery.fn.unselectable = function () {
  
  $(this).attr('unselectable', 'on')
    .css({
      MozUserSelect: 'none',
      KhtmlUserSelect: 'none',
      WebkitUserSelect: 'none',
      userSelect: 'none'
    })
    .each(function() { 
      this.onselectstart = function() { return false; };
    });
  return this;
};