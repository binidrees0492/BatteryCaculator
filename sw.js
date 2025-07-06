self.addEventListener('install', e => {
  console.log('Service Worker installed');
});
self.addEventListener('fetch', e => {
  // Offline support could go here
});
