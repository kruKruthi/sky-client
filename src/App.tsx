import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./components/ui/Products/ProductsList";
// import ProductDetail from "./components/ui/ProductDetail/ProductDetail";
import RootLayout from "./components/layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <ProductList /> },
      // { path: '/product/:id', element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
