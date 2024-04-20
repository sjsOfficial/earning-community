// // useFacebookLoginStatus.js

// import { useState, useEffect } from 'react';

// const useFacebookLoginStatus = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     useEffect(() => {
//         // Load the Facebook SDK asynchronously
//         window.fbAsyncInit = function() {
//             FB.init({
//                 appId: 'YOUR_APP_ID',
//                 cookie: true,
//                 xfbml: true,
//                 version: 'v13.0'
//             });

//             // Check the login status when the SDK is loaded
//             FB.getLoginStatus(function(response) {
//                 if (response.status === 'connected') {
//                     setIsLoggedIn(true);
//                 } else {
//                     setIsLoggedIn(false);
//                 }
//             });
//         };

//         // Load the SDK asynchronously
//         (function(d, s, id) {
//             var js, fjs = d.getElementsByTagName(s)[0];
//             if (d.getElementById(id)) {return;}
//             js = d.createElement(s); js.id = id;
//             js.src = "https://connect.facebook.net/en_US/sdk.js";
//             fjs.parentNode.insertBefore(js, fjs);
//         }(document, 'script', 'facebook-jssdk'));
//     }, []);

//     return { isLoggedIn };
// };

// export default useFacebookLoginStatus;
