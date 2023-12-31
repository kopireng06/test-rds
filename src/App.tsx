import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './components/layouts/Dashboard'
import './App.css'
import OperationList from './components/views/OperationList'
import SoInformation from './components/views/SoInformation'
import { ChakraProvider } from '@chakra-ui/react'

const router = createBrowserRouter([
  {
    path: '/operation/create',
    element: (
      <Dashboard>
        <SoInformation />
      </Dashboard>
    )
  },
  {
    path: '/operation/:operationID/so-information',
    element: (
      <Dashboard>
        <SoInformation />
      </Dashboard>
    )
  },
  {
    path: '/operation',
    element: (
      <Dashboard>
        <OperationList />
      </Dashboard>
    )
  },
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
