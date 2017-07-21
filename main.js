function main() {
$("about").hide();
$(".html").hide();
$(".html").fadeIn(1000);
$(".topbar").hide();
$(".topbar").fadeIn(2500);
$(".topbar").on('click', function() {
    $(".topbar").hide(1000);
  });
$(".changepage").on('click', function() {
   $(".div1").slideToggle(1000);
   $(".div2").slideToggle(1000);
   $(".topbar").hide(1000);
  });
}
$(document).ready(main);







/* im definately not about to do some js stuff
<script src='/main.js'></script>
<script src='https://code.jquery.com/jquery-3.1.0.min.js'></script>

This belongs in footer under Copyright:
<p id="clickme">click me...</p>


This Belongs in CSS
#clickme {
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 0;
}
#clickme:hover {
  opacity: 1;
}*/
