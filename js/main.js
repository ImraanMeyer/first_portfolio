// GO TO TOP JUMPLINK APPEAR ON SCROOL // 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("go-to-top").style.display = "block";
    } else {
    document.getElementById("go-to-top").style.display = "none";
    } 
}


function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}