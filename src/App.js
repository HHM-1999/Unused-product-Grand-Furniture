import router from "../src/Router/Routes/Routes";
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="className='max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
