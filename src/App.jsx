import {Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import ProgramPage from './pages/ProgramPage';
import HomePage from './pages/HomePage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route path='/programs' element={<ProgramPage/>}/>
        <Route index element={<HomePage/>}/>
      </Route>
    )
  )
  return <RouterProvider router={router}/>
}

export default App
