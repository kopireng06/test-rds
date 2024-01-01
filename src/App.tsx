import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './components/layouts/Dashboard'
import './App.css'
import OperationList from './components/views/OperationList'
import SoInformation from './components/views/SoInformation'
import CreateOperation from './components/views/CreateOperation'
import NoteList from './components/views/NoteList'
import SoDetail from './components/views/SoDetail'
import { ChakraProvider } from '@chakra-ui/react'
import MaterialList from './components/views/MaterialList'
import FoamUsageList from './components/views/FoamUsageList'

const router = createBrowserRouter([
  {
    path: '/operation/create',
    element: (
      <Dashboard>
        <CreateOperation />
      </Dashboard>
    )
  },
  {
    path: '/operation/:operationID/so-information/:soID',
    element: (
      <Dashboard>
        <SoDetail />
      </Dashboard>
    )
  },
  {
    path: '/operation/:operationID/foam-usages',
    element: (
      <Dashboard>
        <FoamUsageList />
      </Dashboard>
    )
  },
  {
    path: '/operation/:operationID/materials',
    element: (
      <Dashboard>
        <MaterialList />
      </Dashboard>
    )
  },
  {
    path: '/operation/:operationID/notes',
    element: (
      <Dashboard>
        <NoteList />
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
