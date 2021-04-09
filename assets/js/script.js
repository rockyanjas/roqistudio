filterSelection("semua")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("pk-col");
  if (c == "semua") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

filterSelectionGallery("all-gallery")
function filterSelectionGallery(c) {
  var x, i;
  x = document.getElementsByClassName("gl-col");
  if (c == "all-gallery") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "gallery");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "gallery");
  }
}

filterSelectionEvents("all-events")
function filterSelectionEvents(c) {
  var x, i;
  x = document.getElementsByClassName("ev-col");
  if (c == "all-events") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "events");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "events");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("call-to-action__button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("current");
    current[0].className = current[0].className.replace(" current", "");
    this.className += " current";
  });
}

// Add active class to the current button (highlight it)
var btnContainerGallery = document.getElementById("myBtnContainerGallery");
var btns = btnContainerGallery.getElementsByClassName("call-to-action__button btn-gallery");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("current-gallery");
    current[0].className = current[0].className.replace(" current-gallery", "");
    this.className += " current-gallery";
  });
}

// Add active class to the current button (highlight it)
var btnContainerEvents = document.getElementById("myBtnContainerEvents");
var btns = btnContainerEvents.getElementsByClassName("call-to-action__button btn-events");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("current-events");
    current[0].className = current[0].className.replace(" current-events", "");
    this.className += " current-events";
  });
}

const myslide = document.querySelectorAll('.myslider'),
  dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoslide() {
  counter += 1;
  slidefun(counter);
}

function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}

function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoslide, 8000);
}

function slidefun(n) {
  let i;
  for(i = 0; i < myslide.length; i++){
    myslide[i].style.display = "none";
  }
  for(i = 0; i < dot.length; i++) {
    dot[i].classList.remove('active');
  }

  if(n > myslide.length) {
    counter = 1;
  }

  if(n < 1) {
    counter = myslide.length;
  }

  myslide[counter - 1].style.display = "block";
  dot[counter - 1].classList.add('active');
}

// Get the id
var modal = document.getElementById('id01');
var navLogin = document.getElementById('nav-index');
var navBtn = document.getElementById('nav-1');
var navBtn2 = document.getElementById('nav-2');
var navBtn3= document.getElementById('nav-3');
var navBtn4 = document.getElementById('nav-4');
var navBtn5 = document.getElementById('nav-5');
var navBtn6 = document.getElementById('nav-6');
var navTgl = document.getElementById('inpNavToggle');

// When the user clicks anywhere outside of the id, close it
window.onclick = function(event) {
  if (event.target == navLogin){
    navTgl.checked = false;
  } else if (event.target == navBtn){
    navTgl.checked = false;
  } else if (event.target == navBtn2){
    navTgl.checked = false;
  } else if (event.target == navBtn3){
    navTgl.checked = false;
  } else if (event.target == navBtn4){
    navTgl.checked = false;
  } else if (event.target == navBtn5){
    navTgl.checked = false;
  } else if (event.target == navBtn6){
    navTgl.checked = false;
  }
}

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');