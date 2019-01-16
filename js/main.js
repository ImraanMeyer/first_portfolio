// GO TO TOP JUMPLINK APPEAR ON SCROOL // 

window.onscroll = function() {scrollFunction()};

// Hovering go to top button //
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("go-to-top").style.display = "block";
    } else {
    document.getElementById("go-to-top").style.display = "none";
    } 

// Shrink on scroll navbar // 
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "1.2em 0 1.2em 0";
        
    } else {
        document.getElementById("navbar").style.padding = "2.4em 0 2.4em 0";
    }
}

function width () {
if (window.width > 480) {
    $ ('head').append ('<script src="js/main.js" charset="utf-8"></script>')
}
