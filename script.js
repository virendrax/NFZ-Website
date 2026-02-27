// Theme Toggle
document.getElementById('themeToggle').addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
});

// Hero Word Rotation
const words = document.querySelectorAll('#hero-tagline .word');
let index = 0;
function showWord(){
  words.forEach(w=>w.style.display='none');
  words[index].style.display='inline';
  index = (index+1)%words.length;
}
showWord();
setInterval(showWord, 3000);

// Fade/Slide-in sections
const faders=document.querySelectorAll('.fade-in, .slide-in');
const appearOnScroll=new IntersectionObserver((entries, observer)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.25});
faders.forEach(fader=>appearOnScroll.observe(fader));

// Scroll Progress
window.addEventListener('scroll',()=>{
  const scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
  const height=document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById('scrollProgress').style.width=(scrollTop/height*100)+'%';
});

// Background Parallax (Desktop)
if(window.innerWidth>768){
  const circles=document.querySelectorAll('.circle');
  document.addEventListener('mousemove',e=>{
    const x=(e.clientX/window.innerWidth-0.5)*40;
    const y=(e.clientY/window.innerHeight-0.5)*40;
    circles[0].style.transform=`translate3d(${x}px,${y}px,0)`;
    circles[1].style.transform=`translate3d(${-x}px,${-y}px,0)`;
  });
}

// Optional: particles
const particlesContainer=document.querySelector('.particles');
for(let i=0;i<50;i++){
  const p=document.createElement('div');
  p.style.position='absolute';
  p.style.width='4px';
  p.style.height='4px';
  p.style.background='rgba(127,0,255,0.5)';
  p.style.borderRadius='50%';
  p.style.top=Math.random()*100+'%';
  p.style.left=Math.random()*100+'%';
  p.style.opacity=Math.random()*0.5+0.2;
  p.style.animation=`particleMove ${10+Math.random()*10}s linear infinite`;
  particlesContainer.appendChild(p);
}