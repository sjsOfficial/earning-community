import { useEffect, useState } from 'react';
import { getMessaging, getToken } from 'firebase/messaging';
import firebaseApp from '@/libs/firebase';
import { toast } from 'react-toastify';


const useFcmToken = () => {
  const [token, setToken] = useState('');
  const [notificationPermissionStatus, setNotificationPermissionStatus] =
    useState('');

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
          const messaging = getMessaging(firebaseApp);

          // Retrieve the notification permission status
          
          const permission = await Notification.requestPermission();
          setNotificationPermissionStatus(permission);

          // Check if permission is granted before retrieving the token
          if (permission === 'granted') {
            const currentToken = await getToken(messaging, {
              vapidKey:
                'BLOgaf0LfSPskmJ32kMNui2QXO6ID3Fa0nyArS7fIjZrj1QD_3frOTNf7dty7fq5rEaoP2AAPRPNeRPNafMAsvA',
            });
            if (currentToken) {
              setToken(currentToken);
            } else {
              console.log(
                'No registration token available. Request permission to generate one.'
              );
            }
          } else {
            toast.warning("Notification permission is denied");
          }
        }
      } catch (error) {
        console.log('An error occurred while retrieving token:', error);
      }
    };

    retrieveToken();
  }, []);

  return { fcmToken: token, notificationPermissionStatus };
};

export default useFcmToken;