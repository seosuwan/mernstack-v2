import { lazy } from 'react';


const Login3PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: './UserLogin',
      component: lazy(() => import('./UserLogin')),
    },
  ],
};

export default Login3PageConfig;
