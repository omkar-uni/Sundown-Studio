// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

var sec = document.querySelector(".sec");
var fixed = document.querySelector("#fixed-image");

sec.addEventListener("mouseenter", () => {
  fixed.style.display = "block";
});
sec.addEventListener("mouseleave", () => {
  fixed.style.display = "none";
});

var cont = document.querySelectorAll(".cont");

cont.forEach(function(e){
    console.log(e);
    e.addEventListener("mouseenter",function(){
        var att = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${att})`;
        console.log(att);
    })
  
})
