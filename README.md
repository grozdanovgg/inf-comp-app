# Installing the dependancies

## !!! IMPORTANT NOTE !!!
In the package-lock.json file, there is a manual change for tha package "blech32". If you remove the file and then generate it automatically with `npm i`, then you need to manually replace the `"node_modules/blech32":` and the `"blech32": ` objects accordingly: 
```
"node_modules/blech32": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/blech32/-/blech32-1.0.1.tgz",
            "integrity": "sha512-1/vr1wwB8jvfVCkLQMVXLaIyx7Lgxh/6IqVuQlSsCNzWNzU+64oXzOQ/9BRnN4GANjx9i0O3OSQonDlL4FraSA==",
            "dependencies": {
                "long": "^4.0.0"
            },
            "engines": {
                "node": ">=10"
            }
        },
```

```
        "blech32": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/blech32/-/blech32-1.0.1.tgz",
            "integrity": "sha512-1/vr1wwB8jvfVCkLQMVXLaIyx7Lgxh/6IqVuQlSsCNzWNzU+64oXzOQ/9BRnN4GANjx9i0O3OSQonDlL4FraSA==",
            "requires": {
                "long": "^4.0.0"
            }
        },
```
This is needed because of an unresolved bug in the third party libraries that the Exo Wallet Kit (ewk) depends on.

# Startting the app
- `npm start` starts the app in a browser dev environemnt
- To run the app on a mobile device or an emulator you need to follow this steps
   - `npm run build:prod`, or `npm run build:prod:ios` or `npm run build:prod:android` depending if you need to build both or a platform specific build
   - `npm run open:android` or `npm run open:ios` to run in an emulator or real device through Android Studion or xCode (you need to install those as a prerequisite).
# InfCompanionWebComponents

There is a npm command "sync-platform-configs" that is executed before the builds, which takes care of adding some plugin configuratins to the platform code in /ios and in /android. In case you remove and then add again one of them, this script will take care that they are condigured properly.

Additionally there are manually changed files in the platforms:

- AndroidManifest.xml

  - Added <intent-filter> block to allow opening the app with custom schema
  - Set the `android:exported` field to true, as it's the default value when we use intent-filter tags - https://developer.android.com/guide/topics/manifest/receiver-element.html#exported

- From xCode:
  - Added custom URL type handler - CFBundleURLTypes (in info.plist)

# MS App center

In case you remove and re-add the IOS platform, in order to deploy the IOS build to the MS App Center you should manually add the AppCenter-Config.plist to the Xcode project (right-click the app in Xcode and click Add files to ...). This is a one time action after you added the IOS platform.

# Versioning

Currently the versionName in the build.gradle have to be set up manually.

# Splash Screen and Icon Generation

Icon and Splash Screen generation in the project is done by `cordova-res`. A global installation of `cordova-res` is required along with a `capacitor/splash-screen installation`. Additionally `cordova-res` has specific requirements for folder structures and icon sizes.

Refer to the following steps for icon and splash screen generation:

1. install cordova-res `npm install -g cordova-res`
2. `cordova-res` expects the following folder structure:

   resources/\
   android/\
   &emsp; |-- icon-background.png\
   &emsp; |-- icon-foreground.png\
   |-- icon.png\
   |-- splash.png

   // `icon-background.png and icon-foreground.png` -- 432px x 432px images required by android's adaptive icon feature. For reference: https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive \
   // `splash.png` - square image of 2732px × 2732px \
   // `icon.png` - image should be at least 1024px x 1024px

3. generate icons in android and ios:

   `cordova-res ios --skip-config --copy` \
   `cordova-res android --skip-config --copy`

4. configuration settings for the splash screen are present in `capacitor.config.json` inside the SplashScreen property - `plugins --> SplashScreen`

   ##### Note:

   Refer to the documentation for `cordova-res` over here: https://github.com/ionic-team/capacitor-assets
