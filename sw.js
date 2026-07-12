// Service Worker Minimalis untuk Bite & Dim PWA
const CACHE_NAME = 'bitedim-cashier-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Biarkan request langsung mengambil dari jaringan online/cloud Sheets
  return;
});
