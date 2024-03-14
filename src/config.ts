// types
import { DefaultConfigProps } from 'types/config';

export const drawerWidth = 260;

export const twitterColor = '#1DA1F2';
export const facebookColor = '#3b5998';
export const linkedInColor = '#0e76a8';

export const FIREBASE_API = {
  apiKey: '',
  authDomain: ,
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
};

export const AWS_API = {
  poolId: '',
  appClientId: ''
};

export const JWT_API = {
  secret: 'SECRET-KEY',
  timeout: '1 days'
};

export const AUTH0_API = {
  client_id: '',
  domain: ''
};

// ==============================|| THEME CONFIG  ||============================== //

const config: DefaultConfigProps = {
  defaultPath: '/dashboard/analytics',
  fontFamily: `'Public Sans', sans-serif`,
  i18n: 'en',
  miniDrawer: false,
  container: true,
  mode: 'light',
  presetColor: 'default',
  themeDirection: 'ltr'
};

export default config;
