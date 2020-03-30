import React from 'react';
import { Link } from 'react-router-dom';

export const logout = () => {
    window.location.replace("http://localhost:3000/")
}

export default function NavbarComponent() {
    return (
        <>
        <div className="navbar">
            <h3>VetConnect</h3>
            <Link onClick = {logout} style = {{float:"right", paddingTop:"40px", paddingRight: "30px"}} to=''>Logout</Link>

        </div>
        </>
    )
}