// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//apiHost: 'http://localhost:8080/api/v0'
//apiHost: 'http://172.31.89.140:8080/api/v0'
//'http://afc0a023a655d4b7d90201bdf3a9a06c-228729812.us-east-1.elb.amazonaws.com:8080/api/v0'
export const environment = {
  production: false,
  appName: 'Udagram',
  apiHost: 'http://localhost:8080/api/v0'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
