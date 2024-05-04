import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import MainLayout from 'src/layouts/main';
// config
import { BASEURL } from 'src/config-global';
//
import { mainRoutes, HomePage } from './main';

// ----------------------------------------------------------------------

export default function Router() {
  const PATH_AFTER_LOGIN = '/app';
  return useRoutes([
    // SET INDEX PAGE WITH SKIP HOME PAGE
    // {
    //   path: `${BASEURL}/index.html`,
    //   element: <Navigate to={PATH_AFTER_LOGIN} replace />,
    // },
    // {
    //   path: '/app/index.html',
    //   element: <Navigate to={PATH_AFTER_LOGIN} replace />,
    // },

    // ----------------------------------------------------------------------

    // SET INDEX PAGE WITH HOME PAGE
    {
      path: window.location.pathname,
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },

    // // Main routes
    // ...mainRoutes,

    // No match 404
    { path: '*', element: <h1>{window.location.pathname}</h1> },
  ]);
}
