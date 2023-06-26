import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/homePage';
const router = createBrowserRouter([

  {
    path: '/',
    element: (
      <HomePage></HomePage>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
