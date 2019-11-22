// execute navBarStickyFunc when user scrolls page
window.onscroll = function() {
    navBarStickyFunc();
};

// retrieve nav bar
var navbar = document.getElementById("navbar");
console.log(navbar)

// get the offset position of the nav bar
var sticky = navbar.offsetTop;

// function for turning on/off stickiness
function navBarStickyFunc(){
    // add the sticky class to nav bar once scroll position is reached.
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }   else {
        navbar.classList.remove("sticky");
    }
}
