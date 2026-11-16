const pages=[["index.html","Home"],["about.html","About"],["experience.html","Experience"],["publications.html","Publications"],["blog.html","Blog"],["contact.html","Contact"]];
const cur=location.pathname.split('/').pop()||'index.html';
document.body.insertAdjacentHTML('afterbegin',`<nav><a class="logo" href="index.html">Shrawan<span>Mehta</span></a><div class="nl">${pages.map(([u,n])=>`<a href="${u}" class="${u==cur?'on':''}">${n}</a>`).join('')}</div><div><button class="ib" id="mu" aria-label="Music">🎵</button> <button class="ib" id="th" aria-label="Theme">🌙</button></div></nav>`);
document.body.insertAdjacentHTML('beforeend',`<footer>© ${new Date().getFullYear()} Shrawan Mehta · PLM & SC Quality Manager · Educator · AI Enthusiast</footer>`);
try{if(localStorage.getItem('t')=='light')document.body.classList.add('light')}catch(e){}
document.getElementById('th').onclick=()=>{const l=document.body.classList.toggle('light');try{localStorage.setItem('t',l?'light':'dark')}catch(e){}};
let M=null;document.getElementById('mu').onclick=function(){ /* ambient music generated in the browser, off by default */
 if(M){M.stop();M=null;this.textContent='🎵';return}this.textContent='🔊';
 const A=new(window.AudioContext||window.webkitAudioContext)(),g=A.createGain();g.gain.value=0;g.gain.linearRampToValueAtTime(.15,A.currentTime+3);g.connect(A.destination);
 const f=A.createBiquadFilter();f.type='lowpass';f.frequency.value=900;f.connect(g);
 const C=[[110,164.8,220,329.6],[87.3,130.8,174.6,261.6],[98,146.8,196,293.7],[82.4,123.5,164.8,246.9]],os=[];
 for(let i=0;i<8;i++){const o=A.createOscillator(),v=A.createGain();o.type=i%2?'triangle':'sine';o.frequency.value=C[0][i>>1];o.detune.value=i%2?6:-6;v.gain.value=.12;o.connect(v);v.connect(f);o.start();os.push(o)}
 let c=0;const iv=setInterval(()=>{c=(c+1)%4;os.forEach((o,k)=>o.frequency.linearRampToValueAtTime(C[c][k>>1],A.currentTime+4))},9000);
 M={stop(){clearInterval(iv);g.gain.linearRampToValueAtTime(0,A.currentTime+.8);setTimeout(()=>A.close(),900)}}};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('v');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.card,.t,.ct a').forEach(e=>{e.classList.add('rv');io.observe(e)});
