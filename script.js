
  var string = "Fuel Mind Travel";
    var array = string.split("");
    var timer;

    function looper() {
      if (array.length > 0) {
        document.querySelector("h1").innerHTML += array.shift();
      } else {
        clearTimeout(looper);
      }
      timer = setTimeout('looper()', 50);
    }
    looper();

const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};

  
   

