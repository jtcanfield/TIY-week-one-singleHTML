function main() {
var number = Math.floor(Math.random() * 6) + 1 ;
// alert(number);
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
  });
$(".newsletter").on('click', function() {
    $(".newsletter").addClass("activelink");
    $(".about").removeClass("activelink");
    $(".index").removeClass("activelink");
    $(".newsletterbody").show();
    $(".aboutbody").hide();
    $(".homebody").hide();
  });
var nameInput = document.getElementById('nameInput');
var emailInput = document.getElementById('emailInput');
var signupButton = document.getElementById('signupButton');
signupButton.addEventListener('click', function(e) {
  var nameVal = nameInput.value;
  var emailVal = emailInput.value;
  if (nameVal && emailVal) {
    alert('Thanks for signing up, ' + nameVal + '. Newsletters will be sent to ' + emailVal);
      nameInput.value = "";
      emailInput.value = "";
  } else {
    alert('We would love for you to sign up, please provide both your name and email address.');
    }
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
