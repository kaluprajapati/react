import React, {useContext} from 'react'
import usercontextprovider from '../context/usercontext'
import UserContext from '../context/usercontext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile