$(document).ready(function(){
  $(".menu-trigger").click(function(){
    $("nav ul"). slideToggle(500);
}); //end slide toggle function //

$(window).resize(function(){
    if( $(window).width()> 700 ){
    $("nav ul").removeAttr("style");
  }
}); // end resize//

}); //end ready function.... copy paste javascript and html from example, make sure in your h ref code in html you have menu-trigger
