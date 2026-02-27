window.addEventListener("load",()=>{
document.getElementById("preloader").style.display="none";
});

particlesJS("particles-js",{
particles:{
number:{value:70},
size:{value:3},
color:{value:"#ff003c"},
line_linked:{enable:true,color:"#00c3ff"},
move:{speed:2}
}
});

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}
});
},{threshold:0.2});

document.querySelectorAll(".reveal").forEach(el=>{
observer.observe(el);
});

const counters=document.querySelectorAll(".counter");
let started=false;

window.addEventListener("scroll",()=>{
if(!started && document.getElementById("stats").getBoundingClientRect().top < window.innerHeight){
counters.forEach(counter=>{
const update=()=>{
const target=+counter.dataset.target;
const count=+counter.innerText;
const inc=target/100;
if(count<target){
counter.innerText=Math.ceil(count+inc);
setTimeout(update,30);
}else{
counter.innerText=target;
}
};
update();
});
started=true;
}
});