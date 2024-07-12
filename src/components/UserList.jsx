import { useContext } from 'react'
import { UserContext } from '../App'

const UserList = () => {
    const {users,Author}=useContext(UserContext)
   return (
    <div>
        <h1>UserList</h1>
        <ul>
{Author}
        {users.map((user)=>(
            <li key={user.id}>{user.id}- your name is  {user.name}</li>
        ))}

        </ul>
    </div>
  )
}

export default UserList