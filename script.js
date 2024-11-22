function mainScroll() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".main",
      start: "top top",
      end: "bottom bottom",
      scrub: 4,
    },
    xPercent: -87,
    ease: Power4,
  });
}

function homeanim() {
  gsap.set(".abouttext", { y: -130, opacity: 0 });
  gsap.set(".na", { y: 130, opacity: 0 });
  gsap.set(".circles", { x: -130, opacity: 0 });
  gsap.to(".abouttext", {
    opacity: 1,
    y: 0,
    duration: 1,
  });
  gsap.to(".na", {
    opacity: 1,
    y: 0,
    duration: 1,
  });
  gsap.to(".circles", {
    opacity: 1,
    x: 0,
    duration: 1,
  });
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".div1",
      start: "top bottom",
      end: "top 50%",
      scrub: 2,
    },
  });

  tl.to(
    ".na",
    {
      y: 100,
      opacity: 0,
      ease: Power4,
    },
    "a"
  );
  tl.to(
    ".abouttext",
    {
      y: -100,
      opacity: 0,
      ease: Power4,
    },
    "a"
  );
  tl.to(
    ".circles",
    {
      x: -100,
      opacity: 0,
      ease: Power4,
    },
    "a"
  );
}

function workscroll() {
  gsap.to(".scrwork", {
    scrollTrigger: {
      trigger: ".div1",
      start: "top 45%",
      end: "bottom 70%",
      scrub: 2,
    },
    xPercent: 250,
    ease: Power2,
  });
}

function workanim() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".div1",
      start: "top 70%",
      end: "top 50%",
      scrub: 2,
    },
  });
  tl.from(
    ".img1",
    {
      opacity: 0,
      y: -150,
      ease: Power4,
    },
    "a"
  );
  tl.from(
    ".img2",
    {
      opacity: 0,
      y: 150,
      ease: Power4,
    },
    "a"
  );

  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".div1",
      start: "top 60%",
      end: "top 20%",
      scrub: 2,
    },
  });
  tl1.from(
    ".img3",
    {
      opacity: 0,
      y: -150,
      ease: Power4,
    },
    "a"
  );
  tl1.from(
    ".img4",
    {
      opacity: 0,
      y: 150,
      ease: Power4,
    },
    "a"
  );

  gsap.from(".img6", {
    scrollTrigger: {
      trigger: ".div1",
      start: "top 35%",
      end: "top 10%",
      scrub: 2,
    },
    opacity: 0,
    y: 150,
    ease: Power4,
  });

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".div1",
      start: "top 10%",
      end: "bottom 80%%",
      scrub: 2,
    },
  });
  tl2.from(
    ".img5",
    {
      opacity: 0,
      y: -150,
      ease: Power4,
    },
    "a"
  );
  tl2.from(
    ".img7",
    {
      opacity: 0,
      x: 150,
      ease: Power4,
    },
    "a"
  );
  tl2.from(
    ".img8",
    {
      opacity: 0,
      y: 150,
      ease: Power4,
    },
    "a"
  );

  gsap.to(".slide2", {
    scrollTrigger: {
      trigger: ".div1",
      start: "bottom 70%",
      end: "bottom 50%",
      scrub: 2,
      
    },
    x: -300,
    opacity: 0,
    ease: Power4,
  });
}

function expanim(){
  gsap.from(".exp", {
  scrollTrigger: {
    trigger: ".div2",
    start: "top 70%",
    end: "top 50%",
    scrub: 2,
  },
  opacity: 0,
  x: 500,
  ease: Power4
});
  
  gsap.from(".b1", {
    scrollTrigger: {
      trigger: ".div2",
      start: "top 40%",
      end: "top 30%",
      scrub: 2,
    },
    opacity: 0,
    y: -500,
    ease: Power4
  });
  gsap.from(".b2", {
    scrollTrigger: {
      trigger: ".div2",
      start: "top 30%",
      end: "top 20%",
      scrub: 2,
    },
    opacity: 0,
    y: 500,
    ease: Power4
  });
  gsap.from(".b3", {
    scrollTrigger: {
      trigger: ".div2",
      start: "top 18%",
      end: "top 10%",
      scrub: 2,
    },
    opacity: 0,
    y: -500,
    ease: Power4
  });
  
  gsap.from(".b4", {
    scrollTrigger: {
      trigger: ".div2",
      start: "bottom bottom",
      end: "bottom 90%",
      scrub: 2,
    },
    opacity: 0,
    y: 500,
    ease: Power4
  });
  
  gsap.from(".b5", {
    scrollTrigger: {
      trigger: ".div2",
      start: "bottom 80%",
      end: "bottom 70%",
      scrub: 2
    },
    opacity: 0,
    y: -500,
    ease: Power4
  });
}

function testim(){
  gsap.from(".clients", {
    scrollTrigger:{
      trigger:".div3",
      start:"top 50%",
      end:"top 30%",
      scrub: 2,
    },
    y:-500,
    opacity:0,
    ease: Power2
  })
  
  
  gsap.from(".t1", {
    scrollTrigger:{
      trigger:".div3",
      start:"bottom 50%",
      end:"bottom 30%",
      scrub: 2,
      
    },
    y:500,
    opacity:0,
    ease: Power2
  })
  gsap.from(".t2", {
    scrollTrigger:{
      trigger:".div3",
      start:"bottom 20%",
      end:"bottom top",
      scrub: 2,
      
    },
    y:-500,
    opacity:0,
    ease: Power2
  })
  
  gsap.from(".t3", {
    scrollTrigger:{
      trigger:".div3",
      start:"bottom -20%",
      end:"bottom -40%",
      scrub: 2,
      
    },
    y:500,
    opacity:0,
    ease: Power2
  })
}

const tl = gsap.timeline({scrollTrigger:{
  trigger:".div4",
  start:"bottom 130%",
  end:"bottom -40%",
  scrub: 2
}
})
tl.to(".l1", {
  x: 600
},"a");
tl.to(".l2", {
  x: -600
},"a")

mainScroll();
homeanim();
workscroll();
workanim();
expanim();
testim();


document.body.onmousemove = function(e) {
  document.documentElement.style.setProperty (
    '--x', (
      e.clientX
    )
    + 'px'
  );
  document.documentElement.style.setProperty (
    '--y', (
      e.clientY
    ) 
    + 'px'
  );
}

let nav= document.getElementById("navbtn");
let blunav=document.getElementById("nav");
let cross=document.getElementById("navx");
console.log(nav);
nav.addEventListener("click",function(){
  console.log("clicked");
  nav.style.visibility="hidden";
  blunav.style.visibility="visible";
  
});
cross.addEventListener("click",function(){
  nav.style.visibility="visible";
  blunav.style.visibility="hidden";
});