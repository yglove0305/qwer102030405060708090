self.addEventListener('install', event => {
  console.log('서비스 워커 설치됨');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('서비스 워커 활성화됨');
});

self.addEventListener('push', event => {
  const data = event.data ? event.data.text() : '푸시 메시지 없음';
  event.waitUntil(
    self.registration.showNotification('푸시 알림', {
      body: data,
      icon: 'icon.png',
      tag: 'push-tag'
    })
  );
});
