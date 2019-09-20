importScripts('/cache-polyfill.js');

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('randyduke').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',,
                '/index.html?resume=1',
                '/img/icons/chemex.svg',
                '/img/icons-light/chemex.svg',
                '/img/bg/overlay.png',
                '/img/greetings.png'
            ]);
        })
    );
});
