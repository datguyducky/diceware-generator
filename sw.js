let cacheName = "diceware-gen-v1";
let contentToCache = [
	'./index.html',
   './index.html?homescreen=1',
   './?homescreen=1',
   './about.html',
   './style.css',
   //all languages used by Diceware Gen
   './languages/de.json',
   './languages/eng.json',
   './languages/es.json',
   './languages/fr.json',
   './languages/it.json',
   './languages/jpn.json',
   './languages/no.json',
   './languages/pl.json',
   './languages/pt.json',
   './languages/ru.json',
   './languages/sv.json',
   './languages/zh.json',
];

self.addEventListener('install', (e) => {
 	e.waitUntil(
		caches.open(cacheName).then((cache) => {
			console.log('[Service Worker] caching all needed content');
			return cache.addAll(contentToCache);
	  	})
	)
});

self.addEventListener('fetch', (e) => {
	console.log('[Service Worker] Fetched resource: '+e.request.url);
	e.respondWith(
		caches.match(e.request).then((r) => {
			console.log('[Service Worker] Fetching resource: '+e.request.url);
			return r || fetch(e.request).then((response) => {
				return caches.open(cacheName).then((cache) => {
				console.log('[Service Worker] Caching new resource: '+e.request.url);
				cache.put(e.request, response.clone());
			 		return response;
			});
		  });
		})
	);
});

self.addEventListener('activate', (e) => {
	e.waitUntil(
	  caches.keys().then((keyList) => {
			return Promise.all(keyList.map((key) => {
		  if(cacheName.indexOf(key) === -1) {
			return caches.delete(key);
		  }
		}));
	  })
	);
});