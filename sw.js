importScripts('version.js');
const V='applis-eps-eleves-v'+APP_VERSION,F=['./','version.js','index.html','eps-core.js','eleve-core.js','apps.json','manifest.webmanifest','style.css','contact.html','confidentialite.html','icons/icon-192.png','icons/icon-512.png','icons/logo.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(F.map(u=>fetch(u,{cache:'reload'}).then(r=>r.ok&&c.put(u,r)).catch(()=>{})))));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))));self.clients.claim()});
// Réseau d'abord (dernière version en ligne), cache en secours (hors ligne).
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
 e.respondWith(fetch(e.request,{cache:'no-cache'}).then(r=>{if(r.ok&&new URL(e.request.url).origin===location.origin){const c=r.clone();caches.open(V).then(x=>x.put(e.request,c))}return r}).catch(()=>caches.match(e.request,{ignoreSearch:true})))});
