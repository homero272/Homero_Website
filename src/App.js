import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import HomePage from './components/HomePage';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AboutMe from './components/AboutMe';
import NotFound from './components/NotFound';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <NotFound/>
  },
  {
    path: '/Homero_Website',
    element: <HomePage/>,
    errorElement: <NotFound/>
  },
  {
    path: '/about',
    element: <AboutMe/>
  },
  {
    path: '/projects',
    element: <Projects/>
  },
  {
    path: '/contact',
    element: <ContactMe/>
  },

]);
function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
