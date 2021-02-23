import React from 'react';
import { Redirect } from 'react-router-dom';

const Profile = () => {
    if (localStorage.onLoggined == 'true') {
        return (
            <div>
                <h1>Profile page</h1>
            </div>
        )
    }
    return <Redirect to='/login/'/>
}

export default Profile;