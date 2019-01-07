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
        document.getElementById("navbar").style.padding = "0.1em";
        // document.getElementsByTagName("a").style.padding = "0";
        // document.getElementsByTagName("ul li").style.padding= "0.95em 0 0 0";
    } else {
      document.getElementById("navbar").style.padding = "2em"; 
    //   document.getElementsByTagName("ul li").style.padding=  "1.9 0 0 0";
    }
}
