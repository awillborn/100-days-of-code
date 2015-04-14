$(document).ready(function() {
  setUpNavScroll();
});

function setUpNavScroll(){
  $('a[href*=#]').each(function(){
    setUpLink(this)
  });
}

function setUpLink(link){
  if (window.location.pathname.replace(/^\//,'') == link.pathname.replace(/^\//,'')
     && window.location.hostname == link.hostname
     && link.hash.replace(/#/,'') ) {
      var $targetId = $(link.hash)
      var $targetAnchor = $('[name=' + link.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
      if ($target) {
        var targetOffset = $target.offset().top;
        $(link).click(function(e) {
          e.preventDefault();
          scrollToSection(this, targetOffset)
        });
      }
    }
}

function scrollToSection(link, targetOffset){
  $("#nav li a").removeClass("active");
  $(link).addClass('active');
  $('html, body').animate({scrollTop: targetOffset}, 1000);
  return false;
}
