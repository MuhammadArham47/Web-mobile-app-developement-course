import React from 'react'
import Auth from './Auth'

function AuthProvider({ children }) {
    return (
        <>
            <Auth>
                {children}
            </Auth>
        </>
    )
}

export default AuthProvider