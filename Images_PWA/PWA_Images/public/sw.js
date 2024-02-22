let cacheData = "appV1"

this.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/',
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/index.html',
                '/user',
                '/home',
            ]);
        })
    );
});


this.addEventListener('fetch', function (e) {
    if (!navigator.onLine) {
        e.respondWith(
            caches.match(e.request).then((res) => {
                if (res) {
                    return res;
                }
                return fetch(e.request);
            })
        );
    }
});

// Use the cache to retrieve the integrationsAccountCards data
// this.addEventListener('fetch', function (e) {
//     if (e.request.url.endsWith('/integrationsAccountCards')) {
//         e.respondWith(
//             caches.open(cacheData).then((cache) => {
//                 return cache.match(e.request).then((response) => {
//                     return response || fetch(e.request).then((networkResponse) => {
//                         cache.put(e.request, networkResponse.clone());
//                         return networkResponse;
//                     });
//                 });
//             })
//         );
//     }
// });
