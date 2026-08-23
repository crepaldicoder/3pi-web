const header=document.querySelector('.site-header'),menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open);document.body.classList.toggle('menu-open',!open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open');document.body.classList.remove('menu-open')}));

const progress=document.createElement('div');progress.className='scroll-progress';progress.setAttribute('aria-hidden','true');document.body.appendChild(progress);
const orbit=document.querySelector('.orbit'),heroGrid=document.querySelector('.hero-grid'),heroTitle=document.querySelector('.hero-title'),contactOrbit=document.querySelector('.contact-orbit');
const projects=[...document.querySelectorAll('.project')];
let lastY=0,scrollTarget=0,scrollCurrent=0,pointerX=0,pointerY=0,ticking=false;
function renderMotion(){scrollCurrent+=(scrollTarget-scrollCurrent)*.085;const max=document.documentElement.scrollHeight-innerHeight,ratio=max?scrollCurrent/max:0;
 progress.style.transform=`scaleX(${ratio})`;
 heroGrid.style.transform=`translate3d(0,${scrollCurrent*.12}px,0) scale(1.06)`;
 heroTitle.style.transform=`translate3d(0,${scrollCurrent*.19}px,0)`;
 orbit.style.transform=`translate3d(${pointerX}px,${pointerY+scrollCurrent*.09}px,0) rotate(${scrollCurrent*.018}deg)`;
 contactOrbit.style.transform=`rotate(${scrollCurrent*.025}deg) scale(${1+Math.sin(scrollCurrent*.002)*.035})`;
 projects.forEach((el,i)=>{const r=el.getBoundingClientRect(),center=r.top+r.height/2-innerHeight/2,shift=Math.max(-38,Math.min(38,-center*.035*(i%2?1:-1)));el.style.setProperty('--drift',`${shift}px`)});
 if(Math.abs(scrollTarget-scrollCurrent)>.1)requestAnimationFrame(renderMotion);else ticking=false}
addEventListener('scroll',()=>{const y=scrollY;header.classList.toggle('scrolled',y>20);header.classList.toggle('hidden',y>lastY&&y>180);lastY=y;scrollTarget=y;if(!ticking){ticking=true;requestAnimationFrame(renderMotion)}},{passive:true});

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');if(e.target.classList.contains('metric'))count(e.target.querySelector('strong'));io.unobserve(e.target)}}),{threshold:.14});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
function count(el){const end=+el.dataset.count,start=performance.now();function tick(t){const p=Math.min((t-start)/1100,1);el.textContent=Math.round(end*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick)}

addEventListener('pointermove',e=>{pointerX=(e.clientX/innerWidth-.5)*28;pointerY=(e.clientY/innerHeight-.5)*28;scrollTarget=scrollY;if(!ticking){ticking=true;requestAnimationFrame(renderMotion)}},{passive:true});
const cursor=document.querySelector('.cursor');addEventListener('pointermove',e=>cursor.animate({transform:`translate(${e.clientX}px,${e.clientY}px)`},{duration:360,fill:'forwards',easing:'cubic-bezier(.16,1,.3,1)'}));document.querySelectorAll('a,button,.service').forEach(el=>{el.addEventListener('mouseenter',()=>cursor.classList.add('active'));el.addEventListener('mouseleave',()=>cursor.classList.remove('active'))});

document.querySelectorAll('.project figure').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(900px) rotateX(${-y*5}deg) rotateY(${x*5}deg) scale(.975)`});el.addEventListener('pointerleave',()=>el.style.transform='')});
document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)*.16,y=(e.clientY-r.top-r.height/2)*.2;el.style.transform=`translate3d(${x}px,${y}px,0)`});el.addEventListener('pointerleave',()=>el.style.transform='')});
renderMotion();
