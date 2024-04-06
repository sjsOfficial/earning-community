// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: 'AIzaSyCDkD8j6BG5M4MRoYGZsTELlfCsEhal2oE',
  authDomain: 'earningcommunity-9094e.firebaseapp.com',
  projectId: 'earningcommunity-9094e',
  storageBucket: 'earningcommunity-9094e.appspot.com',
  messagingSenderId: '506059018344',
  appId: '1:506059018344:web:98d69e18b800b7409a2bdd',
  measurementId: 'G-EM2WLK3PVB',
};
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: './LOGO.png',
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});