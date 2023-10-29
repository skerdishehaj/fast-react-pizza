import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import Order, { loader as orderLoader } from './features/order/Order';
import CreateOrder from './features/order/CreateOrder';
import Home from './ui/Home';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';

// * Imperative way of using Routing which enables data loading capabilities
// * Data Loaders, Data Fetchers, Data Actions

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      { path: '/order', element: <Order /> },
      { path: '/order/new', element: <CreateOrder /> },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
