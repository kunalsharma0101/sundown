
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

const elemc = document.querySelector(".elem-container")
const fixed = document.querySelector(".fixed-image")

elemc.addEventListener("mouseenter", ()=>{
    fixed.style.display = "block";
    
})
elemc.addEventListener("mouseleave", ()=>{
    fixed.style.display = "none";
    
})

var elems = document.querySelectorAll(".elem")
elems.forEach((e)=>{
    e.addEventListener("mouseenter" , ()=>{
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
    
})


