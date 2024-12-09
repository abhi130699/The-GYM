var cursor = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    cursor.style.left =  dets.x + "px"
    cursor.style.top =  dets.y + "px"
    blur.style.left =  dets.x - 150+ "px"
    blur.style.top =  dets.y - 150 + "px"
})

var h4 = document.querySelectorAll("#nav h4")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursor.style.scale = 3
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        cursor.style.scale = 1
        cursor.style.border = "0px solid #D72535"
        cursor.style.backgroundColor = "#D72535"
    })
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger: {
        trigger:"#nav",
        scroller:"body",
        start: "top -10%",
        // end:"top-11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -75%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start: "top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from(".card",{
    scale:.5,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start: "top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#page3 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"body",
        start: "top 75%",
        end:"top 70%",
        scrub:3
    }
})

var footer = document.querySelectorAll("#footer h3")
footer.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursor.style.scale = 3
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        cursor.style.scale = 1
        cursor.style.border = "0px solid #D72535"
        cursor.style.backgroundColor = "#D72535"
    })
})