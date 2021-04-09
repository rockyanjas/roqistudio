// Get the modal
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var navLogin = document.getElementById('nav-lgn');
var navBtn = document.getElementById('nav-1');
var navBtn2 = document.getElementById('nav-2');
var navTgl = document.getElementById('inpNavToggle');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == modal2){
    modal2.style.display = "none";
  } else if (event.target == navLogin){
    navTgl.checked = false;
  } else if (event.target == navBtn){
    navTgl.checked = false;
  } else if (event.target == navBtn2){
    navTgl.checked = false;
  }
}

function openRegister(index){
  if (index == 1) {
    modal2.style.display="block";
  } else {
    alert();
  }
}

const password = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");

togglePassword.addEventListener("click", toggleClicked);

function toggleClicked() {  
  if (this.checked) {
    password.type = "text";
  } else {
    password.type = "password";
  }
  password.classList.toggle('visible'); 
}
