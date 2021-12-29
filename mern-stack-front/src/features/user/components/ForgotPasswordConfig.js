import { lazy } from 'react';

const ForgotPasswordPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'features/user/components/ForgotPassword',
      component: lazy(() => import('./ForgotPassword')),
    },
  ],
};

export default ForgotPasswordPageConfig;
