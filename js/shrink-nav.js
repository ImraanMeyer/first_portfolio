// When the user scrolls down 80px from the top of the document, resize the navbar's padding
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height = "4em";
    document.getElementsByTagName("a").style.padding = "0";
    document.getElementsByTagName("ul li").style.padding= "1.9"
  } else {
    document.getElementById("navbar").style.height = "6em"; 
    document.getElementsByTagName("ul li").style.padding= "0.95em"
  }
}