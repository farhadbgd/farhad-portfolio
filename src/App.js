import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main/Main';
import router from './Router/Router';

function App() {
  return (
    <div className="">
      {/* <Main></Main> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
