self.addEventListener('install', (e) => {
  self.skipWaiting();
});

// Обязательный обработчик для Android
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => {
    return new Response('Оффлайн-режим');
  }));
});
