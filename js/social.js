/* Social icons (left bar + footer) and language selector for menu, labels and icons */
(function(){
const st='fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
const S=[
["Facebook","https://www.facebook.com/drshrawanmehta",'<svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor"><path d="M14 21v-7h2.400l.4-3H14V9.300c0-.9.3-1.500 1.600-1.500H17V5.100C16.700 5 15.900 5 15 5c-2.200 0-3.700 1.300-3.700 3.800V11H9v3h2.300v7z"/></svg>'],
["X","https://x.com/shrawanmehta0",'<svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>'],
["Instagram","https://www.instagram.com/theshrawanmehta/",`<svg viewBox="0 0 24 24" width="21" height="21" ${st}><rect x="3.500" y="3.500" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.200" cy="6.800" r=".6" fill="currentColor"/></svg>`],
["LinkedIn","https://www.linkedin.com/in/shrawanmehta",'<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><rect x="3.500" y="9" width="3.600" height="11.500"/><circle cx="5.300" cy="5.200" r="2"/><path d="M10 9h3.400v1.600c.6-1.100 1.900-1.900 3.600-1.900 3.200 0 4 2.100 4 4.800v6.900h-3.600v-6.100c0-1.500-.3-2.600-1.800-2.600s-2 1.100-2 2.600v6.100H10z"/></svg>'],
["YouTube","https://www.youtube.com/@shrawanmehta",`<svg viewBox="0 0 24 24" width="22" height="22" ${st}><rect x="2.500" y="5.500" width="19" height="13" rx="4"/><path d="M10 9.200v5.600l4.800-2.800z" fill="currentColor"/></svg>`]];
const D={
en:{n:"English",nav:["Home","About","Experience","Publications","Blog","Contact"],f:"Follow on",me:"Follow me"},
de:{n:"Deutsch",nav:["Start","Über mich","Erfahrung","Publikationen","Blog","Kontakt"],f:"Folgen auf",me:"Folge mir"},
fr:{n:"Français",nav:["Accueil","À propos","Expérience","Publications","Blog","Contact"],f:"Suivre sur",me:"Suivez-moi"},
es:{n:"Español",nav:["Inicio","Sobre mí","Experiencia","Publicaciones","Blog","Contacto"],f:"Seguir en",me:"Sígueme"},
it:{n:"Italiano",nav:["Home","Chi sono","Esperienza","Pubblicazioni","Blog","Contatti"],f:"Segui su",me:"Seguimi"},
pt:{n:"Português",nav:["Início","Sobre mim","Experiência","Publicações","Blog","Contacto"],f:"Seguir no",me:"Segue-me"},
ne:{n:"नेपाली",nav:["गृहपृष्ठ","मेरो बारेमा","अनुभव","प्रकाशन","ब्लग","सम्पर्क"],f:"फलो गर्नुहोस्:",me:"मलाई फलो गर्नुहोस्"},
hi:{n:"हिन्दी",nav:["होम","परिचय","अनुभव","प्रकाशन","ब्लॉग","संपर्क"],f:"फ़ॉलो करें:",me:"मुझे फ़ॉलो करें"},
zh:{n:"中文",nav:["首页","关于我","经历","出版物","博客","联系"],f:"关注：",me:"关注我"},
ar:{n:"العربية",nav:["الرئيسية","نبذة عني","الخبرة","المنشورات","المدونة","تواصل"],f:"تابعني على",me:"تابعني",rtl:1}};
const mk=c=>`<div class="${c}">${S.map(([n,u,i])=>`<a href="${u}" target="_blank" rel="noopener noreferrer" data-n="${n}" aria-label="${n}" title="${n}">${i}</a>`).join('')}</div>`;
document.body.insertAdjacentHTML('beforeend',`<aside class="soc">${mk('x').replace('<div class="x">','').replace(/<\/div>$/,'')}</aside>`);
const ft=document.querySelector('footer');
if(ft)ft.insertAdjacentHTML('afterbegin',`<p id="fme" style="font-weight:700;margin-bottom:10px"></p><div class="socf">${S.map(([n,u,i])=>`<a href="${u}" target="_blank" rel="noopener noreferrer" data-n="${n}">${i}</a>`).join('')}</div>`);
const sel=document.createElement('select');sel.className='ib';sel.setAttribute('aria-label','Language');
sel.innerHTML=Object.keys(D).map(k=>`<option value="${k}">${D[k].n}</option>`).join('');
const tools=document.getElementById('th');if(tools)tools.parentNode.prepend(sel);
function apply(l){const d=D[l]||D.en;document.documentElement.dir=d.rtl?'rtl':'ltr';sel.value=l;
 document.querySelectorAll('.nl a').forEach((a,i)=>a.textContent=d.nav[i]);
 document.querySelectorAll('.soc a,.socf a').forEach(a=>{const t=d.f+' '+a.dataset.n;a.title=t;a.setAttribute('aria-label',t)});
 const m=document.getElementById('fme');if(m)m.textContent=d.me;
 try{localStorage.setItem('lang',l)}catch(e){}}
let l='en';try{l=localStorage.getItem('lang')||((navigator.language||'en').slice(0,2))}catch(e){}
if(!D[l])l='en';sel.onchange=()=>apply(sel.value);apply(l);
})();
