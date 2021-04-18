// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyA3NaSDYcEIOfu68KY2WxtiwXESh5KKoLc",
    authDomain: "tams-uom.firebaseapp.com",
    databaseURL: "https://tams-uom.firebaseio.com",
    projectId: "tams-uom",
    storageBucket: "tams-uom.appspot.com",
    messagingSenderId: "168278577046",
    appId: "1:168278577046:web:75dcbe451c322bb67397b7",
    measurementId: "G-2RMZVS81PN"
  },
  googleMapsKeys:'AIzaSyA9rPesD1LpqsLTVFeHEpxvjnl5FNLDbS0',
  apiBaseUrl: 'http://localhost:3000/api'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
