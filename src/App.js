import logo from './logo.svg';
import './App.css';

import { RouterProvider } from 'react-router-dom'
import { routers } from './router/routing'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div className="App">
        <RouterProvider router={routers}/>
    </div>
  );
}

export default App;
