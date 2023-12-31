import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './components/layouts/Dashboard'
import './App.css'
import OperationList from './components/views/OperationList'
import { ChakraProvider } from '@chakra-ui/react'

const router = createBrowserRouter([
  {
    path: '*',
    element: (
      <Dashboard>
        <OperationList />
      </Dashboard>
    )
  }
])

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
