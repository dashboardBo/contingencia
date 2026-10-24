// Service worker mínimo: solo permite instalar la app. No guarda nada en caché,
// así siempre se carga la última versión publicada en GitHub.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
