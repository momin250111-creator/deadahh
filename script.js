const IP = "vengeancesmp.gomc.me";
const toast = document.getElementById("toast");
const characters = [
  ["FlameFrags","taken","TAKEN","Played by NotSamyX"],["ParrotX2","locked","TRIAL LOCKED","Awarded automatically through /protagonist."],["SpokelsHere","locked","TRIAL LOCKED","Awarded automatically through /protagonist."],["Wemmbu","locked","TRIAL LOCKED","Awarded automatically through /protagonist."],
  ["MRpinguin","available","AVAILABLE","This role is waiting for a player."],["sirentop","available","AVAILABLE","This role is waiting for a player."],["venthatguy","available","AVAILABLE","This role is waiting for a player."],["ArcticYeti","available","AVAILABLE","This role is waiting for a player."],
  ["Blu 101","available","AVAILABLE","This role is waiting for a player."],["caterpillar","available","AVAILABLE","This role is waiting for a player."],["CrePy","available","AVAILABLE","This role is waiting for a player."],["DripsIHope","available","AVAILABLE","This role is waiting for a player."],
  ["dumo","available","AVAILABLE","This role is waiting for a player."],["ella mayo","available","AVAILABLE","This role is waiting for a player."],["esp3ros","available","AVAILABLE","This role is waiting for a player."],["IamCrazy69","available","AVAILABLE","This role is waiting for a player."],
  ["Jmez25","available","AVAILABLE","This role is waiting for a player."],["king1uki","available","AVAILABLE","This role is waiting for a player."],["kiyochi","available","AVAILABLE","This role is waiting for a player."],["LockHart","available","AVAILABLE","This role is waiting for a player."],
  ["Marco1024","available","AVAILABLE","This role is waiting for a player."],["nickybobby1212","available","AVAILABLE","This role is waiting for a player."],["oliviao","available","AVAILABLE","This role is waiting for a player."],["Pink Punda","available","AVAILABLE","This role is waiting for a player."]
];
const grid=document.getElementById('characterGrid'), search=document.getElementById('characterSearch');
let filter='all';
function imgFor(name){ return `https://minotar.net/body/${encodeURIComponent(name)}/200.png`; }
function render(){
 const q=search.value.trim().toLowerCase(); grid.innerHTML='';
 characters.filter(c=>(filter==='all'||c[1]===filter)&&(!q||c[0].toLowerCase().includes(q))).forEach(([name,status,label,played])=>{
   const card=document.createElement('article'); card.className='character-card'; card.dataset.status=status;
   card.innerHTML=`<div class="card-status ${status}">${label}</div><div class="skin-wrap"><div class="skin-halo"></div><img src="${imgFor(name)}" alt="${name} Minecraft skin" loading="lazy" onerror="this.style.display='none'"></div><div class="char-role">PROTAGONIST</div><h3>${name}</h3><p>${played}</p><button class="open-profile">OPEN PROFILE <span>→</span></button>`;
   card.addEventListener('click',()=>openCharacter(name,status,label,played)); grid.appendChild(card);
 });
 document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b.dataset.filter===filter));
}
function openCharacter(name,status,label,played){
 document.getElementById('modalImage').src=imgFor(name); document.getElementById('modalImage').alt=name+' Minecraft skin';
 document.getElementById('modalName').textContent=name; document.getElementById('modalPlayed').textContent=played; document.getElementById('modalStatus').textContent=label; document.getElementById('modalStatusText').textContent=label;
 document.getElementById('characterModal').classList.add('show'); document.getElementById('characterModal').setAttribute('aria-hidden','false'); document.body.classList.add('modal-open');
}
function closeModal(){document.getElementById('characterModal').classList.remove('show');document.getElementById('characterModal').setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');}
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;render();}));
search.addEventListener('input',render); document.querySelectorAll('[data-close]').forEach(e=>e.addEventListener('click',closeModal)); document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();}); render();
async function copyIP(){try{await navigator.clipboard.writeText(IP);}catch{const a=document.createElement('textarea');a.value=IP;document.body.appendChild(a);a.select();document.execCommand('copy');a.remove();}toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800);}
document.querySelectorAll('#copyIp,#copyIpSmall,#copyIpBig,#copyIpStatus').forEach(b=>b.addEventListener('click',copyIP));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)';observer.unobserve(e.target);}}),{threshold:.06});
document.querySelectorAll('.section,.feature-grid article,.lore-card').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(22px)';el.style.transition='opacity .7s ease, transform .7s ease';observer.observe(el);});
