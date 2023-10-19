import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'infinite.fleet.companion',
  appName: 'Infinite Fleet',
  webDir: 'www',
  bundledWebRuntime: false,
  ios:{
    contentInset: 'automatic'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true
    }
  }
};

export default config;
