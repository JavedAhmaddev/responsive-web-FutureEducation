var lastScrollTop = 00;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       $("#site-header").addClass("navup")
   } else {
    $("#site-header").removeClass("navup")
   }
   lastScrollTop = st;
});
