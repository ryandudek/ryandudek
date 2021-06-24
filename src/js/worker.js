importScripts('cache-polyfill.js');

const files = [
    '/',
    '/index.html',
    '/img/icons/',
    '/img/icons-light/',
    '/resources/',
    '/img/bg/overlay.png',
    '/img/greetings.png',
    '/inert.min.js'
];

const version = '4.2.0';
const cacheName = `ryandudek-${version}`;

self.addEventListener('install', (event) => {
    console.info('Event: Install');

    event.waitUntil(
        caches.open(cacheName).then((cache) => cache.addAll(files).then(() => {
            // Forces the waiting service worker to become the active service worker
            console.info('All files are cached');

            return self.skipWaiting();
        }).catch((error) => {
            console.error('Failed to cache', error);
        }))
    );
});


self.addEventListener('fetch', (event) => {
    console.info('Event: Fetch');

    const { request } = event;
    // Tell the browser to wait for newtwork request and respond with below
    event.respondWith(
        // If request is already in cache, return it
        caches.match(request).then((response) => {
            if (response) {
                return response;
            }

            // if request is not cached, add it to cache
            return fetch(request).then((response) => {
                const responseToCache = response.clone();
                caches.open(cacheName).then((cache) => {
                    cache.put(request, responseToCache).catch((err) => {
                        console.warn(`${request.url}: ${err.message}`);
                    });
                });

                return response;
            });
        })
    );
});

//
// ACTIVATE EVENT: triggered once after registering, also used to clean up caches.
//

// Adding `activate` event listener
self.addEventListener('activate', (event) => {
    console.info('Event: Activate');

    // Remove old and unwanted caches
    event.waitUntil(caches.keys().then((cacheNames) => Promise.all(cacheNames.map((cache) => {
        if (cache !== cacheName) {
            return caches.delete(cache);
        }
    }))));
});
