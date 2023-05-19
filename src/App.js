
import './App.css';
import{ createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './Components/Homepage';

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>
    }
  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
