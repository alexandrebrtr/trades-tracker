
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'trades-tracker.app',
  appName: 'Trades Tracker',
  webDir: 'dist',
  bundledWebRuntime: false,
  backgroundColor: "#1A1F2C", // Couleur de fond pendant le chargement
  ios: {
    contentInset: 'always',
    scheme: 'TradesTracker',
    backgroundColor: "#1A1F2C",
    preferredContentMode: 'mobile',
    limitsNavigationsToAppBoundDomains: true,
  },
  server: {
    url: "https://trades-tracker.com",
    cleartext: true
  },
};

export default config;
