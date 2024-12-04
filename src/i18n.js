
// import i18next from 'i18next';
// import { initReactI18next } from 'react-i18next';

// // Optional: If you are loading translation files from a server
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

// // Initialize i18next
// i18next
//   .use(Backend) // Use backend to load translation files
//   .use(LanguageDetector) // Automatically detect user language
//   .use(initReactI18next) // Integrate with React
//   .init({

//     resources :{
//         en :{
//             translation :{
//                 "text" : "Welcome"
//             }

//         },
//         kh :{
//             translation :{
//                 "text" : "ស្វាគមន៍"
//             }
//         }

//     },
//     fallbackLng: 'en', // Default language if the detected language is not available
//     debug: true, // Set to false in production for better performance
//     interpolation: {
//       escapeValue: false, // React already escapes values
//     },
//     react: {
//       useSuspense: false, // Disable Suspense (optional, depending on your needs)
//     },
//     backend: {
//       loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
//     },
    
//   });

// export default i18next;