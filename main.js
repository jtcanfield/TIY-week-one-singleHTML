function main() {
// alert("JS is alive!");
$(".aboutbody").hide();
$(".newsletterbody").hide();

$(".index").on('click', function() {
    $(".index").addClass("activelink");
    $(".about").removeClass("activelink");
    $(".newsletter").removeClass("activelink");
    $(".homebody").show();
    $(".aboutbody").hide();
    $(".newsletterbody").hide();
  });
$(".about").on('click', function() {
    $(".about").addClass("activelink");
    $(".index").removeClass("activelink");
    $(".newsletter").removeClass("activelink");
    $(".aboutbody").show();
    $(".homebody").hide();
    $(".newsletterbody").hide();
    // $(".title").attr("Bent Creek Ceramics", "Bent Creek Ceramics - About");
  });
$(".newsletter").on('click', function() {
    $(".newsletter").addClass("activelink");
    $(".about").removeClass("activelink");
    $(".index").removeClass("activelink");
    $(".newsletterbody").show();
    $(".aboutbody").hide();
    $(".homebody").hide();
  });
}
$(document).ready(main);



// $(".topbar").on('click', function() {
//     $(".topbar").hide(1000);
//   });



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
