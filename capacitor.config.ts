import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.BMI.Calculator',
  appName: 'BMI Calculator',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#fff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner:false,
      splashFullScreen: true,
      splashImmersive: true,
      // layoutName: "launch_screen",
      // useDialog: false,
    },
},
}
export default config;
