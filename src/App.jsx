 import { createContext} from 'react'
import AppInitialState from './components/AppInitialState'
import Clock from './components/Clock'
import Home from './components/Home'
import UserPage from './components/UserPage'

export const UserContext=createContext();
const App = () => {
  const users=[
    {id:1,name:"AMIR"},
    {id:2,name:"ARSO"},
    {id:3,name:"OMRAN"},
  ]

  return (

    <div>

      <Clock />
      <AppInitialState />
      <Home  />

<UserContext.Provider value={{users:users,Author:"Amir Mahdi"}}>
<UserPage />
</UserContext.Provider>

    </div>
  )
}

export default App