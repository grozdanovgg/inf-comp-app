/* eslint-env es2020 */

// /**
//  * Instead of manually putting configuration files inside the android/* and ios/* folders
//  * we do this with this script on every build. All the code inside the platfrom folders is automatically generated.
//  * If we manually add configurations there, they can be yeasily lost after some re-adding of the platforms.
//  */

const { pathExists, copy } = require('fs-extra');
const packageJson = require('./package.json');

async function isAndroidPlatformExists() {
  return await pathExists('android/app/src/main/assets/');
}

async function copyConfigFiles() {
  if (await isAndroidPlatformExists()) {
    // Needed by @capacitor-community/appcenter lib
    await copy('appcenter-config.json', 'android/app/src/main/assets/appcenter-config.json');

    // Needed https://appcenter.ms to run the ionic build before copying the web build inside
    await copy('appcenter-post-clone.sh', 'android/app/appcenter-post-clone.sh');
  }

  /**
   * For the IOS platform
   * You should manually add the file "AppCenter-Config.plist" with Xcode - https://github.com/capacitor-community/appcenter-sdk-capacitor#ios
   */
}

(async () => {
  await copyConfigFiles();
})();


