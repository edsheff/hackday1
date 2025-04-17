import { createBrowserRouter } from 'react-router';
import App from './App';
import AppLayout from './AppLayout';
import DashboardPage from './pages/Dashboard';
import OrdersPage from './pages/Orders';

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: AppLayout,
        children: [
          {
            path: '',
            Component: DashboardPage,
          },
          {
            path: 'orders',
            Component: OrdersPage,
          },
        ],
      },
    ],
  },
]);

export default router;
