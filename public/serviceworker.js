const CACHE_NAME = "version-1";
const urlsToCache = [
    'index.html',
    '/src/App.js',
    '/src/Create.js',
    '/src/Home.js',
    '/src/index.js',
    '/src/LeadDetails.js',
    '/src/LeadList.js',
    '/src/Navigate.js',
    '/src/useFetch',
    '/data/db.json',
    '/src/index.css',
    '/src/bg.jpg',
];

const self = this;
//Install SW
self.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache)=>{
            console.log('Opened cache');
            
            return cache.addAll(urlsToCache);
        })
    )
});

//Listen for requests
self.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.match(event.request)
        .then(() => {
            return fetch(event.request)
            .catch(() => caches.match('offline.html'))
        })
    )
});

//Activate the SW
self.addEventListener('activate',(event)=>{
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
            if(!cacheWhitelist.includes(cacheName)) {
                return caches.delete(cacheName);
            }   
})
    ))
    )
});